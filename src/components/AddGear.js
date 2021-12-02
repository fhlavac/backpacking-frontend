/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  FileUpload,
  Grid,
  Page,
  PageSection,
  PageSectionVariants,
  Title,
  Form, FormGroup, TextInput,
} from '@patternfly/react-core';

const AddGear = () => (
  <Page>
    <PageSection variant={PageSectionVariants.light} className="app-c-page-section">
      <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
        Add Gear
      </Title>
      <Title headingLevel="h3" size="l" className="app-c-title pf-u-pb-md" />
      <Form>
        <Grid span={7} asGutter>
          <FormGroup label="Name">
            <TextInput />
          </FormGroup>
          <FormGroup label="Description">
            <TextInput />
          </FormGroup>
          <FormGroup label="Weight (grams)">
            <TextInput />
          </FormGroup>
          <br />
          <FormGroup label="Upload gear photo">
            <FileUpload
              type="text"
              filenamePlaceholder="Drag and drop a file or upload one"
              browseButtonText="Upload"
            />
          </FormGroup>
        </Grid>
      </Form>
    </PageSection>
  </Page>
);
export default AddGear;
