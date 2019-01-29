// Modules
import * as R from 'ramda'
import React from 'react'
import PropTypes, { object } from 'prop-types'
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
    const { pens } = this.props
    const penItems = pens.map(pen => (
      <div
        onClick={() => <Link to="/">CreatePen</Link>}
        style={{ border: '2px solid black', margin: '40px' }}
      >
        <ul>
          <li key={pen.writer}>{pen.writer}</li>
          <li key={pen.title}>{pen.title}</li>
        </ul>
      </div>
    ))
    return (
      <div style={{ width: '350px', border: '0.5px solid black' }}>
        <Link to="/">Home</Link>
        <Link to="/CreatePen">CreatePen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <p>Recent pens</p>
        {/* {R.length(inli, pens)} */}
        <ul>{penItems}</ul>
        {/* <div> {R.map(inli, pens)} </div> */}
      </div>
    )
  }
}

Recentpens.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(object),
}

Recentpens.defaultProps = {
  fetchPens: '',
  pens: [],
}
