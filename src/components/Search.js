import React, { Component } from 'react'
import Gallery from './Gallery'
import axios from 'axios';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchText: ''
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

  searchMovies = (movieName) => {
    axios({
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        query: movieName
      },
    }).then((res) => {
      res = res.data.results;
      this.setState({ movies: res})
    })
  }

  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch = () => {
    this.searchMovies(this.state.searchText)
  }

  render() {
    const { movies } = this.state
    console.log(this.state.movies)
    return (
      <div>
        <input type="text" onChange={(e) => this.handleSearchText(e)} />
        <button onClick={this.handleSearch}>SEARCH</button>
        <Gallery movies={movies} />
      </div>
    )
  }

}

export default Search