import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props
    return (
      <div>
        <img src={movie.image} alt={movie.name} />
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
      </div>
    )
  }
}
