/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Page,
  PageSection,
  Title,
} from '@patternfly/react-core';

const AddGear = () => (
  <Page>
    <PageSection className="app-c-page-section">
      <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
        Add Gear
      </Title>
      <Title headingLevel="h3" size="l" className="app-c-title pf-u-pb-md" />
    </PageSection>
  </Page>
);
export default AddGear;
