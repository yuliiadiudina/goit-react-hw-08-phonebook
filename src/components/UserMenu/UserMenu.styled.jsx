import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContactsLink = styled(Link)`
  padding: 15px; 
  &:focus,
  &:hover,
   {
    color: rgb(181, 181, 127);
 
  }
`;
export const LogOutButton = styled.button`
  min-width: 80px;
  background-color: transparent;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  border: none;
  cursor: pointer;
  color: #3b3b3b;
  &:focus,
  &:hover {
    color: rgb(181, 181, 127);
  }
`;