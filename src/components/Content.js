import React, { useState, useRef, useEffect } from 'react';
import {
  Gallery,
  GalleryItem,
  Page,
  PageSection,
  Title,
} from '@patternfly/react-core';
import GearItem from './GearItem';
import IconWater from './icons/icon-water';
import { fetchGearForCategory } from '../api/gear';
import './Content.scss';
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
    <Page>
      <PageSection className="app-c-page-section">
        <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
          <IconWater />
          Category name
        </Title>
        <Gallery hasGutter>
          { gear.map((item) => (
            <GalleryItem key={item.id}>
              <GearItem item={item} />
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </Page>
  );
};
export default Content;
