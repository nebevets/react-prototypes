import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';
import Error from './error';

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
        const {entry} = response.data.feed;
        this.setState({
          movies: entry
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error
        })
      })
  }
  render(){
    const {movies, error} = this.state;
    if (error){
      return(
        <Error stack={error.stack}/>
      );
    }
    const movieComponents = movies.map((movie, index) => 
        <Movie key={movie.id.attributes['im:id']} movie={movie} number={index+1} />
    );
    return(
      <div className="movieList">
        {
          movieComponents.length
            ? <div>
                {movieComponents}
              </div>
            : null
        }
      </div>
    );
  }
}

export default MovieList;
