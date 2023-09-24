import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  min-width: 70px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  font-style: inherit;
  color: inherit;
    &:focus,
    &:hover {
      color: rgb(181, 181, 127);
    }
`;