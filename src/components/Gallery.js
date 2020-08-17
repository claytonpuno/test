import React, { Component } from 'react';
import axios from 'axios';

// import a Link component
import { Link } from 'react-router-dom';

class Gallery extends Component {
    constructor(){
    super();
    this.state = {
      movies: [],
      searchText: ''
    }
  }

  render() {
    return (
      <div className="catalogue">
        { this.props.movies.map( (movie) => {
          return (
              <div key={movie.id} className="movie">
                <Link to={`/movie/${movie.id}`}>
                  <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                  alt={`Movie poster for ${movie.original_title}`}/>
                </Link>
              </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;

