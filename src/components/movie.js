import React, {Component} from 'react';
import Video from './video';
import './movie.css';

class Movie extends Component{
  constructor(props){
    super(props);
    this.state = {
      isPreviewOpen: false
    }
  }
  handleClick = (event) => {
    event.preventDefault();
    const {isPreviewOpen} = this.state;
    this.setState({
      isPreviewOpen: !isPreviewOpen
    });
  }
  render(){
    const {movie, number} = this.props;
    const {isPreviewOpen} = this.state;
    const {href, type} = movie.link[1].attributes;
    return(
      <div className="movie">
        <span>{number}</span>
        <img
          onClick={this.handleClick}
          className="image"
          src={movie['im:image'][2].label}
          alt={movie.title.label}
          title="click for preview"
        />
        <div className="details">
          <p className="title">
            {movie.title.label}
          </p>
          <p className="summary">
            {movie.summary.label}
          </p>
          <p className="releaseDate">
            {movie['im:releaseDate'].attributes.label}
          </p>
          {
            movie.rights
              ? <p className="rights">
                  {movie.rights.label}
                </p>
              : null
          }
        </div>
        {
          isPreviewOpen
            ? <Video href={href} type={type} closeVideo={this.handleClick} />
            : null
        }
      </div>
    );
  }
}

export default Movie;
