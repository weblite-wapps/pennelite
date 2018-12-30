import React from 'react'
import { Link } from '@reach/router'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/CreatePen">CreatePen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <p>Dashboard</p>
      </div>
    )
  }
}
