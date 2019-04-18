import React from 'react';
import MovieList from './movie_list';

const appTitle = {
  position: 'fixed',
  top: '5vh',
  left: '2.5vw',
  margin: 0,
  padding: 0,
  opacity: .5,
}

const App = () =>
  <div className="container text-right">
    <h1 className="text-left" style={appTitle}>iTunes Top 10</h1>
    <MovieList />
  </div>;

export default App;
