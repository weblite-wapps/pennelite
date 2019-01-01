// Modules
import React from 'react'
import { Link } from '@reach/router'
// local modules

export default class Recentpens extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/CreatePen">CreatePen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <p>Recent pens</p>
      </div>
    )
  }
}

Recentpens.propTypes = {}
