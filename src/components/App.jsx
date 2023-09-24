import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
    }, [dispatch]); 
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </Container>
  );
}
