import React from 'react';
import {
  Split, SplitItem,
} from '@patternfly/react-core';
import CategoryList from './CategoryList';
import Content from './Content';

import './main.scss';

const Main = () => (
  <div className="main-content">
    <Split>
      <SplitItem>
        <CategoryList />
      </SplitItem>
      <SplitItem isFilled>
        <Content />
      </SplitItem>
    </Split>
  </div>
);
export default Main;
