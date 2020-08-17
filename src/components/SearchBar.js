import React from 'react'

const SearchBar = (props) => {
  const {
    handleSearchText,
    handleSearch,
  } = props

  return (
    <div>
      <input type="text" onChange={(e) => handleSearchText(e)} />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  )
}

export default SearchBar