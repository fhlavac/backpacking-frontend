import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ icon, name }) => (
  <div style={{ display: 'flex' }}>
    <img src={icon} alt="" />
    <span>{name}</span>
  </div>
);

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
