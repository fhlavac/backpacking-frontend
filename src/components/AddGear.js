/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  ActionGroup,
  Button,
  Dropdown,
  DropdownToggle,
  FileUpload,
  Grid,
  NumberInput,
  Page,
  PageSection,
  PageSectionVariants,
  Switch,
  Title,
  Form, FormGroup, TextInput,
} from '@patternfly/react-core';

import './AddGear.scss';

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
          <FormGroup label="Weight">
            <NumberInput
              value="1"
              inputName="input 1"
              inputAriaLabel="number input 1"
              minusBtnAriaLabel="minus 1"
              plusBtnAriaLabel="plus 1"
              unit="grams"
            />
          </FormGroup>
          <FormGroup label="Upload gear photo">
            <FileUpload
              type="text"
              filenamePlaceholder="Drag and drop a file or upload one"
              browseButtonText="Upload"
            />
          </FormGroup>
          <FormGroup label="Category">
            <Dropdown
              toggle={(
                <DropdownToggle isDisabled>
                  Category
                </DropdownToggle>
              )}
            />
          </FormGroup>
          <FormGroup label="Add to backpack">
            <Switch
              id="simple-switch"
              label=""
              labelOff=""
            />
          </FormGroup>
          <ActionGroup>
            <Button variant="primary">Save</Button>
            <Button variant="disabled">Clear</Button>
          </ActionGroup>
        </Grid>
      </Form>
    </PageSection>
  </Page>
);
export default AddGear;
