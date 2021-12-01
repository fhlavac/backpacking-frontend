import { Nav, NavItem, NavList } from '@patternfly/react-core';
import React from 'react';

const CategoryList = () => (
  <Nav>
    <NavList>
      <NavItem id="default-link1" to="#default-link1" itemId={0} isActive>
        Link 1
      </NavItem>
      <NavItem id="default-link2" to="#default-link2" itemId={1}>
        Link 2
      </NavItem>
      <NavItem id="default-link3" to="#default-link3" itemId={2}>
        Link 3
      </NavItem>
      <NavItem id="default-link4" to="#default-link4" itemId={3}>
        Link 4
      </NavItem>
    </NavList>
  </Nav>
);

export default CategoryList;
