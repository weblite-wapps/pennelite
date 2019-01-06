// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
// local modules

export default class Recentpens extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchPens } = this.props
    console.log('mounted')
    fetchPens()
  }

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

Recentpens.propTypes = {
  fetchPens: PropTypes.func,
}

Recentpens.defaultProps = {
  fetchPens: '',
}
