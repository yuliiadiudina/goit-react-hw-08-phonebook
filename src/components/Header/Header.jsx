import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'selector/useAuth';
import { StyledHeader, LogoText, LogoWrap } from './Header.styled';
function Header() {
    const { isLoggedIn } = useAuth();
    return (
      <StyledHeader>
        <Link to="/">
          <LogoWrap>
            <LogoText>Phonebook</LogoText>
          </LogoWrap>
        </Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledHeader>
    );
  }
  export default Header;