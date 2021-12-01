import React from 'react';
import {
  Masthead, MastheadMain, MastheadBrand, MastheadContent,
} from '@patternfly/react-core';
import logo from '../assets/images/logo.png';
import NavLink from './NavLink';

const Header = () => (
  <Masthead id="basic">
    <MastheadMain>
      <MastheadBrand>
        <img src={logo} alt="Backpacking Logo" />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent style={{ marginLeft: 'auto' }}>
      <NavLink icon="../assets/icons/gear-list.svg" name="My Gear" />
      <NavLink icon="../assets/icons/my-backpack.svg" name="My Backpack" />
    </MastheadContent>
  </Masthead>
);
export default Header;
