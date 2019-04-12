import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';

const App = () =>
  <div className="container">
    <h1>This is React Routing</h1>
    <Route path="/" component={Welcome} />
  </div>;

export default App;
