/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

class MovieDetail extends Component {
  state = {
    movieDetail: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9efcc7b3717c87ef6cfe11214da67368&language=en-US`);
      const movieDetail = await res.json();
      console.log(movieDetail);
      this.setState({
        movieDetail: movieDetail,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {/* {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)} */}
        <p>{this.state.movieDetail.title}</p>
        <p>{this.state.movieDetail.tagline}</p>
        <p>{this.state.movieDetail.popularity}</p>
        <p>{this.state.movieDetail.runtime}</p>
        <p>{this.state.movieDetail.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
