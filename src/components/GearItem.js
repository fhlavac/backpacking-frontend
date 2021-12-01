import {
  Button, Card, CardBody, CardHeader, CardHeaderMain, CardTitle,
} from '@patternfly/react-core';
import React from 'react';
import propTypes from 'prop-types';
import { API_SERVER_URL } from '../config/config';

const GearItem = ({ item: { name } }) => (
  <Card>
    <CardHeader>
      <CardHeaderMain>
        <img src={`${API_SERVER_URL}/sample.png`} alt={name} style={{ objectFit: 'cover' }} />
      </CardHeaderMain>
    </CardHeader>
    <CardTitle>{name}</CardTitle>
    <CardBody>
      <Button variant="primary">Add to Backpack</Button>
    </CardBody>
  </Card>
);

GearItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default GearItem;
