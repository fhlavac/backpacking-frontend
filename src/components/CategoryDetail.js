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
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import GearItem from './GearItem';
import IconHiking from './icons/icon-hiking';
import { fetchGearForCategory } from '../api/gear';
import './CategoryDetail.scss';

const selector = (state) => state;

const CategoryDetail = () => {
  const [gear, setGear] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const state = useSelector(selector, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      fetchGearForCategory(id).then((data) => setGear(data));
    } else {
      setGear([]);
    }
  }, [history.location]);

  console.log('state', state);

  const addItem = (item) => {
    dispatch({ type: 'ADD_TO_BACKPACK', payload: item });
  };

  const removeItem = (gearId) => {
    dispatch({ type: 'REMOVE_FROM_BACKPACK', payload: gearId });
  };

  return (
    <Page>
      <PageSection className="app-c-page-section">
        <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
          Category name
        </Title>
        <Gallery hasGutter>
          { gear.map((item) => (
            <GalleryItem key={item.id}>
              <GearItem item={item} onAdd={addItem} onRemove={removeItem} />
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
          <Button variant="primary" onClick={() => history.push('/add-gear')}>Add gear</Button>
        </EmptyState>

      </PageSection>
    </Page>
  );
};
export default CategoryDetail;
