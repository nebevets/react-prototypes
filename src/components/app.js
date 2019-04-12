import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';

const App = () =>
  <div className="container">
    <Nav />
    <Route path="/" component={Welcome} />
  </div>;

export default App;
