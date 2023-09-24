import React from 'react';

import { Navigation, NavigationLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <Navigation>
      <NavigationLink to="/login">Log In</NavigationLink>
      <NavigationLink to="/register">Register</NavigationLink>
    </Navigation>
  );
}
export default AuthNav;