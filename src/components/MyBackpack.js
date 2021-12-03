/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Page,
  PageSection,
  Title,
  Checkbox,
  Button,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
} from '@patternfly/react-core';
import {
  TableComposable, Thead, Tbody, Tr, Th, Td,
} from '@patternfly/react-table';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { TrashIcon } from '@patternfly/react-icons';
import Icon from './icons/icon';
import IconWeight from './icons/icon-weight';
import { API_SERVER_URL } from '../config/config';
import './MyBackpack.scss';

const MyBackpack = () => {
  const columns = ['Packed', null, 'Item', 'Weight', 'Remove'];
  const selector = ({ backpackGear, categories }) => ({
    backpack: categories.reduce((acc, curr) => ({
      ...acc,
      [curr.name]: backpackGear.filter((gear) => gear.categoryId === curr.id),
    }), {}),
    totalWeight: backpackGear.reduce((acc, curr) => {
      const sum = acc + curr.weight;
      return sum;
    }, 0),
  });
  const { backpack, totalWeight } = useSelector(selector, shallowEqual);

  const dispatch = useDispatch();

  const removeItem = (gearId) => {
    dispatch({ type: 'REMOVE_FROM_BACKPACK', payload: gearId });
  };

  return (
    <Page className="my-backpack">
      <PageSection className="app-c-page-section">
        <Title headingLevel="h2" size="xl" className="app-c-title">
          My Backpack
        </Title>
        { Object.values(backpack).some((value) => value.length > 0)
          ? (
            <Title headingLevel="h4" size="md" className="app-c-title">
              <span className="icon-weight-lg"><IconWeight /></span>
              <b>
                {' '}
                {Math.round(totalWeight * 1000) / 1000}
                {' '}
                kg
              </b>
            </Title>
          ) : null}
        {
          Object.keys(backpack).map((key) => (backpack[key].length > 0 ? (
            <>
              <Title headingLevel="h3" size="l" className="app-c-title pf-u-pb-sm pf-u-pt-lg">
                <Icon name={key} />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Title>
              <TableComposable
                aria-label="Simple table"
              >
                {/* <Caption>Simple table using composable components</Caption> */}
                <Thead>
                  <Tr>
                    {columns.map((column, columnIndex) => (
                      <Th key={columnIndex}>{column}</Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {backpack[key].map(({
                    id, imageUrl, name, weight,
                  }, rowIndex) => (
                    <Tr key={rowIndex}>
                      <Td>
                        <Checkbox id={`check-${name}`} name={`check-${name}`} />
                      </Td>
                      <Td><img src={`${API_SERVER_URL}/${imageUrl || 'sample.png'}`} alt={name} /></Td>
                      <Td>{name}</Td>
                      <Td className="icon-weight">
                        <IconWeight />
                        <b>
                          {' '}
                          {weight}
                          {' '}
                          kg
                        </b>
                      </Td>
                      <Td>
                        <Button variant="link" isSmall onClick={() => removeItem(id)} className="button-delete"><TrashIcon /></Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </TableComposable>
            </>
          ) : null
          ))
          }
        { !Object.values(backpack).some((value) => value.length > 0)
          ? (
            <EmptyState className="pf-u-mt-md">
              <EmptyStateIcon icon={() => <Icon name="hiking" />} />
              <Title headingLevel="h4" size="lg" className="pf-u-mt-lg">
                Your backpack is empty.
              </Title>
              <EmptyStateBody>
                Browse categories and add some gear.
              </EmptyStateBody>
            </EmptyState>
          )
          : null}
      </PageSection>
    </Page>
  );
};
export default MyBackpack;
