import React from 'react';
import {
  Masthead, MastheadMain, MastheadBrand, MastheadContent,
} from '@patternfly/react-core';
import logo from '../assets/images/brand.png';
import gearList from '../assets/icons/gear-list.svg';
import backpack from '../assets/icons/my-backpack.svg';
import NavLink from './NavLink';

const Header = () => (
  <Masthead id="basic">
    <MastheadMain>
      <MastheadBrand>
        <img src={logo} alt="Backpacking Logo" />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent style={{ marginLeft: 'auto' }}>
      <NavLink icon={gearList} name="My Gear" />
      <NavLink icon={backpack} name="My Backpack" />
    </MastheadContent>
  </Masthead>
);
export default Header;
