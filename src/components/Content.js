import React from 'react';
import {
  Grid,
  GridItem,
  Gallery,
  GalleryItem,
} from '@patternfly/react-core';
// import sample from '../assets/images/sample.png';
import GearItem from './GearItem';

const Content = () => {
  const items = [
    {
      id: 8,
      name: 'sandals',
      weight: 0.8,
      imageUrl: null,
      categoryId: 21,
    },
    {
      id: 9,
      name: 'socks',
      weight: 0.1,
      imageUrl: null,
      categoryId: 21,
    },
  ];

  return (
    <Grid hasGutter>
      <GridItem sm={12}>
        <Gallery hasGutter className="pf-u-m-md">
          { items.map((item) => (
            <GalleryItem key={item.id}>
              <GearItem item={item} />
            </GalleryItem>
          ))}
        </Gallery>
      </GridItem>
    </Grid>
  );
};
export default Content;
