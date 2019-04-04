import React from 'react';

const Greeting = ({name, luckyNumber}) =>
  <div className="container">
    <h1>Greetings {name}!</h1>
    <h2 className="text-muted">Your lucky number is: {luckyNumber()}</h2>
  </div>;

export default Greeting;
