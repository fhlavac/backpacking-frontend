import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Badge } from '@patternfly/react-core';
import './nav-link.scss';
import { shallowEqual, useSelector } from 'react-redux';

const NavLink = ({ icon, name, pathString }) => {
  const location = useLocation();
  const selector = ({ backpackGear }) => backpackGear.reduce((acc, curr) => {
    const sum = acc + curr.weight;
    return sum;
  }, 0);

  const totalWeight = useSelector(selector, shallowEqual);

  return (
    <div className={classNames('c-navLink', { isActive: pathString && location.pathname.includes(pathString) })}>
      <img className="c-navLink__icon" src={icon} alt="" />
      <span className="c-navLink__name">{name}</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      { totalWeight > 0 ? (
        <Badge key={1} className="weight-badge">
          {Math.round(totalWeight * 100) / 100}
          {' '}
          kg
        </Badge>
      ) : null}
    </div>
  );
};

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pathString: PropTypes.string,
};

export default NavLink;
