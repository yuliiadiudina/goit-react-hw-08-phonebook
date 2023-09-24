import React from 'react';
import { useForm } from 'react-hook-form';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './Form.styled';
import { logIn } from '../../redux/auth/authOperation';

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters long')
      .required('Password is required'),
  })
  .required();

export function LoginForm() {
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(resp => {
        Notiflix.Notify.success(`Successfully logged in as ${resp.user.name}`);
      })
      .catch(e => {
        e === 'Request failed with status code 400'
          ? Notiflix.Notify.failure('Wrong email or password')
          : Notiflix.Notify.failure('Something went wrong, try one nore time!');
      });
    reset();
    
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <StyledInput {...register('email')} type="email" id="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <label htmlFor="password">Password</label>
        <StyledInput {...register('password')} type="password" id="password" />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <FormButton type="submit">Login</FormButton>
      </StyledForm>
    </>
  );
}