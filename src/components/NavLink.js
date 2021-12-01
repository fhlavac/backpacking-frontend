import React from 'react';
import PropTypes from 'prop-types';
import './nav-link.scss';

const NavLink = ({ icon, name }) => (
  <div className="c-navLink">
    <img className="c-navLink__icon" src={icon} alt="" />
    <span className="c-navLink__name">{name}</span>
  </div>
);

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
