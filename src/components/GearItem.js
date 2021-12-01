import {
  Button, Card, CardBody, CardHeader, CardHeaderMain, CardTitle,
} from '@patternfly/react-core';
import React from 'react';
import propTypes from 'prop-types';
import sample from '../assets/images/sample.png';

const GearItem = ({ item: { name } }) => (
  <Card>
    <CardHeader>
      <CardHeaderMain>
        <img src={sample} alt="A sample gear item" style={{ objectFit: 'cover' }} />
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
