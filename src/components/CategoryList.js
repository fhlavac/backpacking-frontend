import { Nav, NavItem, NavList } from '@patternfly/react-core';
import React, { useEffect, useRef, useState } from 'react';
import { fetchCategories } from '../api/categories';
import IconWater from './icons/icon-water';
import './category-list.scss';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const params = useRef((new URL(document.location)).searchParams);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <Nav>
      <NavList className="category-list">
        {categories.map(({ id, name }) => (
          <NavItem key={id} to={`category?id=${id}`} isActive={Number(params.current.get('id')) === id}>
            <IconWater />
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default CategoryList;
