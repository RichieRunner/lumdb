import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9efcc7b3717c87ef6cfe11214da67368&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.movies);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test" component={} />
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>
          )}
        </div>
      </Router>
    );
  }
}

export default App;

