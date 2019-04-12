import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';

const App = () =>
  <div className="container">
    <Nav />
    <Route path="/" component={Welcome} exact />
    <Route path="/our_macarons" component={OurMacarons} />
  </div>;

export default App;
