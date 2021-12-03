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
import { fetchGearForCategory } from '../api/gear';
import './CategoryDetail.scss';
import Icon from './icons/icon';

const CategoryDetail = () => {
  const [gear, setGear] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const selector = ({ categories }) => categories.find((i) => i.id === Number(id));
  const category = useSelector(selector, shallowEqual) || { name: '' };
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      fetchGearForCategory(id).then((data) => setGear(data));
    } else {
      setGear([]);
    }
  }, [history.location]);

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
          {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </Title>
        { gear.length > 0 ? (
          <Gallery hasGutter>
            { gear.map((item) => (
              <GalleryItem key={item.id}>
                <GearItem item={item} onAdd={addItem} onRemove={removeItem} />
              </GalleryItem>
            ))}
          </Gallery>
        ) : (
          <EmptyState>
            <EmptyStateIcon icon={() => <Icon name={category.name} />} />
            <Title headingLevel="h4" size="lg">
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              {' '}
              category empty.
            </Title>
            <EmptyStateBody>
              You have no gear in this category.
            </EmptyStateBody>
            <Button variant="primary" onClick={() => history.push('/add-gear')}>Add gear</Button>
          </EmptyState>
        )}
      </PageSection>
    </Page>
  );
};
export default CategoryDetail;
