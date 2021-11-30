import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Placeholder from './components/Placeholder';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Placeholder />
      <Footer />
    </div>
  );
}

export default App;
