// Modules
import * as R from 'ramda'
import React from 'react'
import PropTypes, { object } from 'prop-types'
import { Link, Redirect } from '@reach/router'
// local modules
// modules
import { dispatchSetUserAndTitle } from '../CreatePen/CreatePen.action'

export default class Recentpens extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { fetchPens } = this.props
    fetchPens()
  }

  handleClick({ writer, title }) {
    // console.log('writer title :', writer, title)
    dispatchSetUserAndTitle(writer, title)
  }

  render() {
    const { pens } = this.props
    const penItems = pens.map(pen => (
      <div
        onClick={() => this.handleClick(pen)}
        key={`${pen.writer} + ${pen.title}`}
        style={{ border: '2px solid black', margin: '40px' }}
      >
        <Link to="/CreatePen">
          <ul>
            <li>{pen.title}</li>
            <li>{pen.writer}</li>
            <li>Send * Edit</li>
          </ul>
        </Link>
      </div>
    ))
    return (
      <div style={{ width: '350px', border: '2px solid black' }}>
        <Link to="/CreatePen">CreatePen</Link>
        <br />
        <Link to="/Dashboard">Dashboard</Link>
        <p>Recent pens</p>
        <ul>{penItems}</ul>
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
