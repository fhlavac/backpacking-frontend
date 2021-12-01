import React from 'react';
import {
  Masthead, MastheadMain, MastheadBrand, MastheadContent,
} from '@patternfly/react-core';
import logo from '../assets/images/logo.svg';

const Header = () => (
  <Masthead id="basic">
    <MastheadMain>
      <MastheadBrand>
        <img src={logo} alt="Patterfly Logo" />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>My Gear</span>
    </MastheadContent>
  </Masthead>
);
export default Header;
