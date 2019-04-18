import React, { Component } from 'react';
import Movie from './movie';

class MovieList extends Component{
  render(){
    return(
      <div> 
        <h2>Top Ten Movies</h2>
        <Movie />
      </div>
    )
  }
}

export default MovieList;
