import React, { useState, useEffect } from 'react';
import {
  Button,
  Gallery,
  GalleryItem,
  Page,
  PageSection,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  Title,
} from '@patternfly/react-core';
import { useHistory, useParams } from 'react-router-dom';
import GearItem from './GearItem';
import IconHiking from './icons/icon-hiking';
import { fetchGearForCategory } from '../api/gear';
import './CategoryDetail.scss';

const CategoryDetail = () => {
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
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchGearForCategory(id).then((data) => setGear(data));
    } else {
      setGear([]);
    }
  }, [history.location]);

  return (
    <Page>
      <PageSection className="app-c-page-section">
        <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
          Category name
        </Title>
        <Gallery hasGutter>
          { gear.map((item) => (
            <GalleryItem key={item.id}>
              <GearItem item={item} />
            </GalleryItem>
          ))}
        </Gallery>
        <EmptyState>
          <EmptyStateIcon icon={IconHiking} />
          <Title headingLevel="h4" size="lg">
            Hygiene category empty.
          </Title>
          <EmptyStateBody>
            You have no gear in this category.
          </EmptyStateBody>
          <Button variant="disabled">Add gear</Button>
        </EmptyState>

      </PageSection>
    </Page>
  );
};
export default CategoryDetail;
