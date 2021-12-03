import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Split, SplitItem, Stack, StackItem,
} from '@patternfly/react-core';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CategoryDetail from './components/CategoryDetail';
import { fetchCategories } from './api/categories';
import MyBackpack from './components/MyBackpack';
import AddGear from './components/AddGear';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
      dispatch({ type: 'FETCH_CATEGORIES', payload: data });
    });
  }, []);

  return (
    <Router>
      <div className="App orange-theme">
        <Stack>
          <StackItem>
            <Header />
          </StackItem>
          <StackItem isFilled>
            <div className="main-content">
              <Split>
                <SplitItem className="left-side">
                  <Navigation categories={categories} />
                </SplitItem>
                <SplitItem isFilled>
                  <Switch>
                    {categories.map((category) => (
                      <Route path="/category/:id" key={category.name}>
                        <CategoryDetail />
                      </Route>
                    ))}
                    <Route path="/backpack">
                      <MyBackpack />
                    </Route>
                    <Route path="/add-gear">
                      <AddGear />
                    </Route>
                    <Route path="/home-screen">
                      <HomeScreen />
                    </Route>
                  </Switch>
                </SplitItem>
              </Split>
            </div>
          </StackItem>
        </Stack>
      </div>
    </Router>
  );
}
