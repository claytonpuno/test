import React, { Component } from 'react';
import axios from 'axios';

// import a Link component
import { Link } from 'react-router-dom';

class Gallery extends Component {
    constructor(){
    super();
    this.state = {
      movies: [],
      s: "",
      selected: {}
    }
  }

  componentDidMount() {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
      },
    }).then( (res) => {
      res = res.data.results;
      this.setState({
        movies: res,
      })
    })
  }

  handleInput = (e) => {
    let s = e.target.value;
    console.log(s)

    // const filteredMovies = this.state.movies.filter(movie => {
    //   return movies.title.toLowerCase().includes(searchfield.toLowerCase());
    // })

    this.setState({ s })
  }

  render() {
    return (
      <div className="catalogue">
        { this.state.movies.map( (movie) => {
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

