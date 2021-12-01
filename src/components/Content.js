import React, { useState, useRef, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Gallery,
  GalleryItem,
} from '@patternfly/react-core';
import GearItem from './GearItem';
import { fetchGearForCategory } from '../api/gear';
// import sample from '../assets/images/sample.png';

const Content = () => {
  // const gear = [
  //   {
  //     id: 8,
  //     name: 'sandals',
  //     weight: 0.8,
  //     imageUrl: null,
  //     categoryId: 21,
  //   },
  //   {
  //     id: 9,
  //     name: 'socks',
  //     weight: 0.1,
  //     imageUrl: null,
  //     categoryId: 21,
  //   },
  // ];

  const [gear, setGear] = useState([]);
  const params = useRef((new URL(document.location)).searchParams);

  useEffect(() => {
    const categoryId = params.current.get('id');
    if (categoryId) {
      fetchGearForCategory(params.current.get('id')).then((data) => setGear(data));
    } else {
      setGear([]);
    }
  }, []);

  return (
    <Grid hasGutter>
      <GridItem sm={12}>
        <Gallery hasGutter className="pf-u-m-md">
          { gear.map((item) => (
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
