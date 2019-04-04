import React from 'react';
import Greeting from './greeting';
import userObject from './userObject';

const App = () =>
  <Greeting name={userObject.name} luckyNumber={userObject.luckyNumber} />;

export default App;
