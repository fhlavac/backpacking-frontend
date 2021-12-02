import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './nav-link.scss';
import classNames from 'classnames';

const NavLink = ({ icon, name, pathString }) => {
  const location = useLocation();

  return (
    <div className={classNames(['c-navLink', { isActive: pathString && location.pathname.includes(pathString) }])}>
      <img className="c-navLink__icon" src={icon} alt="" />
      <span className="c-navLink__name">{name}</span>
    </div>
  );
};

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pathString: PropTypes.string.isRequired,
};

export default NavLink;
