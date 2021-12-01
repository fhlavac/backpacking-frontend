import React from 'react';
import {
  Masthead, MastheadMain, MastheadBrand, MastheadContent,
} from '@patternfly/react-core';
import logo from '../assets/images/logo.png';

const Header = () => (
  <Masthead id="basic">
    <MastheadMain>
      <MastheadBrand>
        <img src={logo} alt="Backpacking Logo" />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      My Gear
    </MastheadContent>
  </Masthead>
);
export default Header;
