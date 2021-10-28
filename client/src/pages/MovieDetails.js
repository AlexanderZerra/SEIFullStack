import React, { Component } from 'react'
import ApiClient from '../globals'

export default class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    this.getMovieById()
  }

  getMovieById = async () => {
    try {
      const res = await ApiClient.get(`/movie/${this.props.match.params.id}`)
      console.log(res)
      this.setState({ movie: res.data.movie })
    } catch (error) {
      throw error
    }
  }

  deleteMovie = async (id) => {
    try {
      await ApiClient.delete(`/movie/${id}`)
      await this.props.getAllMovies()
      this.props.history.push(`/movies`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    // console.log(this.props.match.params.id)
    return (
      <div>
        {this.state.movie !== null ? (
          <div>
            <img src={this.state.movie.image} alt={this.state.movie.name} />
            <h2>{this.state.movie.name}</h2>
            <h4>{this.state.movie.description}</h4>
          </div>
        ) : null}
      </div>
    )
  }
}
