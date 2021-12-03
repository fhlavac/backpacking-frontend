/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem,
  Page,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import imageleft from '../assets/images/placeholder.png';
import imageright from '../assets/images/placeholder-right.png';
import logo from '../assets/images/brand-large.png';

const HomeScreen = () => (
  <Page>
    <PageSection variant={PageSectionVariants.light} className="app-c-page-home">
      <Card isFlat>
        <Grid md={6}>
          <GridItem
            style={{
              minHeight: '700px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${imageleft})`,
            }}
          />
          <GridItem
            style={{
              minHeight: '700px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${imageright})`,
            }}
          >
            <CardTitle>
              <img src={logo} alt="Backpacking Logo" />
              <br />
              <span className="hackathon"> # ConsoleDot Hackathon Q4 2021</span>
            </CardTitle>
            <CardBody>
              Packing a backpack for a hiking trip is often stressful.
              Especially, when you want to carry the least possible weight on your back.

              This application provides a catalog of outdoor equipment,
              which will allow you to combine the necessary equipment appropriately to
              both avoid carrying extra weight and forgetting essentials at home.
              <br />
              <br />
              <br />
              <br />
            </CardBody>
            <CardBody>
              <Button variant="tertiary" isBlock>View My Gear</Button>
              <br />
              <Button variant="tertiary" isBlock>View My Backpack</Button>
              <br />
              <Button variant="tertiary" isBlock>Add Gear</Button>
            </CardBody>

          </GridItem>
        </Grid>
      </Card>
    </PageSection>
  </Page>
);
export default HomeScreen;
