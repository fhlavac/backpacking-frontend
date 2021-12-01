import React from 'react';
import './App.scss';
import { Stack, StackItem } from '@patternfly/react-core';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App orange-theme">
      <Stack>
        <StackItem>
          <Header />
        </StackItem>
        <StackItem isFilled>
          <Main />
        </StackItem>
      </Stack>
      <Footer />
    </div>
  );
}

export default App;
