/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Page,
  PageSection,
  Title,
} from '@patternfly/react-core';
import {
  TableComposable, Thead, Tbody, Tr, Th, Td,
} from '@patternfly/react-table';
import IconWater from './icons/icon-water';
import './MyBackpack.scss';

const MyBackpack = () => {
  const columns = ['Packed', null, 'Item', 'Weight'];
  const rows = [
    [null, 'https://picsum.photos/100', 'Tent', '1250g'],
    [null, 'https://picsum.photos/100', 'Sleeping Bag - three seasonal', '900g'],
    [null, 'https://picsum.photos/100', 'Tyvek', '100g'],
  ];
  return (
    <Page>
      <PageSection className="app-c-page-section">
        <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
          My Backpack
        </Title>
        <Title headingLevel="h3" size="l" className="app-c-title pf-u-pb-md">
          <IconWater />
          Sleeping Gear
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
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td>
                  {row[0]}
                </Td>
                <Td>
                  <img src={row[1]} alt="" />
                </Td>
                <Td>
                  {row[2]}
                </Td>
                <Td>
                  {row[3]}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </TableComposable>
      </PageSection>
    </Page>
  );
};
export default MyBackpack;
