import {
  Bullseye, Button, Card, CardBody, CardFooter, CardTitle,
} from '@patternfly/react-core';
import React from 'react';
import propTypes from 'prop-types';
import { API_SERVER_URL } from '../config/config';
import IconWeight from './icons/icon-weight';
import './GearItem.scss';

const GearItem = ({ item: { name } }) => (
  <Card className="app-c-card-gear-item">
    <CardTitle headingLevel="h1" size="xl" className="app-c-card-gear-item__title pf-u-text-align-center pf-u-p-md">{name}</CardTitle>
    <CardBody className="app-c-card-gear-item__body">
      <Bullseye>
        <img src={`${API_SERVER_URL}/sample.png`} alt={name} />
      </Bullseye>
    </CardBody>
    <CardBody className="app-c-card-gear-item__body">
      <div className="icon-weight">
        <IconWeight />
        <b>1690g</b>
      </div>
      <p className="description pf-u-text-align-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </CardBody>
    <CardFooter className="pf-u-p-xs app-c-card-gear-item__footer">
      <Button variant="link" isSmall className="pf-u-float-right">Add to backpack</Button>
    </CardFooter>
  </Card>
);

GearItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default GearItem;
