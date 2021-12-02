import React from 'react';
import {
  Page,
  PageSection,
  Title,
} from '@patternfly/react-core';
import IconWater from './icons/icon-water';
import './MyBackpack.scss';

const MyBackpack = () => (
  <Page>
    <PageSection className="app-c-page-section">
      <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
        <IconWater />
        My Backpack
      </Title>
    </PageSection>
  </Page>
);
export default MyBackpack;
