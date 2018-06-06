import React, { Component } from 'react';
import PropTypes from 'prop-types';

// export default class Movie extends Component {
//   static propTypes = {
//     movie: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       // desc: PropTypes.string.isRequired
//     })
//   }

//   static defaultProps = {
    
//   }
  
//   render() {
//     return (
//       <div>
//         <h3>{this.props.movie.title}</h3>
//       </div>
//     )
//   }
// }

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
  </div>
)

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // desc: PropTypes.string.isRequired
  }).isRequired
};