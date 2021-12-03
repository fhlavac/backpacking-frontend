import { Nav, NavItem, NavList } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import './category-list.scss';
import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from './Footer';
import Icon from './icons/icon';
// eslint-disable-next-line
{ /* import IconWater from './icons/icon-water'; */ }

const CategoryList = ({ categories }) => {
  const [activeId, setActiveId] = useState();
  const location = useLocation();

  useEffect(() => {
    setActiveId(Number(location.pathname.split('/')[2]));
  }, [location]);

  return (
    <>
      <Nav>
        <NavList className="category-list">
          <NavItem>
            <Link
              to="/home-screen"
            >
              Home
            </Link>
          </NavItem>
          {categories.map(({ id, name }) => (
            <NavItem
              key={id}
              isActive={activeId === id}
              component={({ onClick, ...props }) => (
                <Link {...props} to={`/category/${id}`} />
              )}
            >
              <Icon name={name} />
              <span>&nbsp;&nbsp;</span>
              {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
            </NavItem>
          ))}
        </NavList>
      </Nav>
      <Footer />
    </>
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
