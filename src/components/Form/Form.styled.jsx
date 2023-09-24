import styled from '@emotion/styled';

export const StyledForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 16px 32px;
  margin-left: auto;
  margin-right: auto;
  gap:10px;

  `;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  background-color: white;
`;
export const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  background-color: beige;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  &:focus,
  &:hover {
    background-color: rgb(232, 232, 185);
  }
`;
export const ErrorMessage = styled.p`
  margin: 0px;
  padding: 0px;
`;

