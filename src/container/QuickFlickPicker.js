import React, { Component } from 'react'
import { discoverMovies, searchMovies } from '../helpers/api'
import { 
  Gallery, 
  SearchBar 
} from '../components'

class QuickFlickPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchText: ''
    }
  }

  componentDidMount() {
    discoverMovies()
      .then(data => this.setState({ movies: data }))
  }

  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch = () => {
    searchMovies(this.state.searchText)
      .then(data => this.setState({ movies: data}))
  }

  render() {
    const { movies } = this.state

    return (
      <div>
        <SearchBar 
          handleSearchText={this.handleSearchText} 
          handleSearch={this.handleSearch} 
        />
        <Gallery movies={movies} />
      </div>
    )
  }

}

export default QuickFlickPicker