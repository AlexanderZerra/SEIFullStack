import './App.css'

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ApiClient from './globals'

// import MovieCard from './component/MovieCard'
import Nav from './components/Nav'

import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    this.getAllMovies()
  }

  getAllMovies = async () => {
    try {
      const res = await ApiClient.get('/movie')
      console.log(res)
      this.setState({ movies: res.data.movies })
    } catch (error) {
      throw error
    }
  }

  createMovie = async () => {
    try {
      const res = await ApiClient.post('/movie')
      console.log(res)
      this.setState({ movies: res.data.movies })
    } catch (error) {
      throw error
    }
  }

  handleSubmit = async (e, form) => {
    e.preventDefault()
    try {
      const res = await ApiClient.post('/movie', form)
      console.log(res)
      this.setState({
        movies: [res.data.movie, ...this.state.movies]
      })
    } catch (error) {
      throw error
    }
  }

  selectMovie = (movie) => {
    console.log(movie)
    this.setState({ selectedMovie: movie })
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/movies"
            component={(props) => (
              <MovieDetails
                {...props}
                getAllMovies={this.getAllMovies}
                movies={this.state.movies}
              ></MovieDetails>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
