import React from 'react';
import './movie.css';

const Movie = ({movie, number}) => {
  const imageSrc = movie['im:image'][2].label;
  const title = movie.title.label;
  const summary = movie.summary.label;
  const releaseDate = movie['im:releaseDate'].attributes.label;
  const rights = movie.rights ? movie.rights.label : null;
  return(
    <div className="movie">
      <span>{number}</span>
      <img className="image" src={imageSrc} alt="{title}" title={title} />
      <div className="details">
        <p className="title">
          {title}
        </p>
        <p className="summary">
          {summary}
        </p>
        <p className="releaseDate">
          {releaseDate}
        </p>
        {
          rights
            ? <p className="rights">
                {rights}
              </p>
            : null
        }
      </div>
    </div>
  );
}

export default Movie;
