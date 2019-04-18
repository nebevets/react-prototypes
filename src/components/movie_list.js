import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount(){
    const iTunesMovieURL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
    axios
      .get(iTunesMovieURL)
      .then((response) => {
        const [movies] = response.data.feed.entry;
        this.setState({
          movies
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render(){
    console.log(this.state);
    return(
      <div> 
        <h2>Top Ten Movies</h2>
        <Movie />
      </div>
    )
  }
}

export default MovieList;
