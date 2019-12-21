import React, {Component} from 'react'
import './App.css'

import { Header, MovieList, MovieDetails } from './components'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <MovieDetails />
      </div>
    )
  }
}

export default App
