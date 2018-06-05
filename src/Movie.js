import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      // desc: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
      </div>
    )
  }
}