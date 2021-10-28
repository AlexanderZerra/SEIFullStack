import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">All Movies</NavLink>
        </div>
      </nav>
    )
  }
}
