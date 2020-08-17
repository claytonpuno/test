import React, { Component } from 'react';
import Gallery from './components/Gallery';
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>quickFlickPicker</h1>
          </header>
          <Route exact path="/" component={Gallery} />  
          <Route exact path="/movie/:movieID" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;