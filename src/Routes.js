import React from 'react'
import { QuickFlickPicker } from './container'
import { MovieDetails } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = (props) => {
  return (
    <Router>
      <Route exact path="/" component={QuickFlickPicker} />  
      <Route exact path="/movie/:movieID" component={MovieDetails} />
    </Router>
  )
}

export default Routes