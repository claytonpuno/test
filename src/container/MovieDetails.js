import React, { Component } from 'react'
import { searchMovieDetails } from '../helpers/api'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      movie: {},
    }
  }

  componentDidMount() {
    const { match } = this.props
    searchMovieDetails(match.params.movieID)
      .then(data => this.setState({ movie: data }))
  }

  render() {
    const { original_title, tagline, overview, poster_path } = this.state.movie
    return (
      <div className="poster">
        <div className="description">
          <h1>{original_title}</h1>
          <h2>{tagline}</h2>
          <p>{overview}</p>
        </div>
        <div className="image">
          <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Movie poster for ${original_title}`}/>
        </div>
      </div>
    )
  }
}

export default MovieDetails