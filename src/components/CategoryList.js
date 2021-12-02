import { Nav, NavItem, NavList } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import './category-list.scss';
import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import IconWater from './icons/icon-water';

const CategoryList = ({ categories }) => {
  const [activeId, setActiveId] = useState();
  const location = useLocation();

  useEffect(() => {
    setActiveId(Number(location.pathname.split('/')[2]));
  }, [location]);

  return (
    <Nav>
      <NavList className="category-list">
        {categories.map(({ id, name }) => (
          <NavItem
            key={id}
            isActive={activeId === id}
            component={({ onClick, ...props }) => (
              <Link {...props} to={`/category/${id}`} />
            )}
          >
            <IconWater />
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

CategoryList.propTypes = {
  categories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
    }),
  ).isRequired,
};

export default CategoryList;
