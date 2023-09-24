import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'selector/useAuth';
import { Menu, Wrap, LogOutButton, ContactsLink } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };
  const { userName } = useAuth();
  return (
    <Menu>
      <p>Welcome, {userName}</p>
      <Wrap>
        <ContactsLink to="/contacts">Contacts</ContactsLink>
        <LogOutButton type="button" onClick={handleLogOut}>
          Logout
        </LogOutButton>
      </Wrap>
    </Menu>
  );
}
export default UserMenu;