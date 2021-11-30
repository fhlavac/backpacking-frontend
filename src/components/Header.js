import React from 'react';
import {
  Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import logo from '../assets/images/logo.svg';

const Header = () => (
  <Masthead id="basic">
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
        <BarsIcon />
      </Button>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand>
        <img src={logo} alt="Patterfly Logo" />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
export default Header;
