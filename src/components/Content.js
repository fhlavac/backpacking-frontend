import React from 'react';
import {
  Grid,
  GridItem,
  Gallery,
  GalleryItem,
  Card,
  CardHeader,
  CardHeaderMain,
  CardBody,
  CardTitle,
  Button,
} from '@patternfly/react-core';
import sample from '../assets/images/sample.png';

const Content = () => (
  <Grid hasGutter>
    <GridItem sm={12}>
      <Gallery hasGutter>
        <GalleryItem>
          <Card>
            <CardHeader>
              <CardHeaderMain>
                <img src={sample} alt="A sample gear item" style={{ objectFit: 'cover' }} />
              </CardHeaderMain>
            </CardHeader>
            <CardTitle>Fancy Ultralight Backpack</CardTitle>
            <CardBody>
              <Button variant="primary">Add to Backpack</Button>
              {' '}
            </CardBody>
          </Card>
        </GalleryItem>
      </Gallery>
    </GridItem>
  </Grid>
);
export default Content;
