import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@reach/router'

export default class CreatePen extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/CreatePen">CreatePen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <p>CreatePen</p>
        <textarea name="" id="" cols="30" rows="10" />
        <textarea name="" id="" cols="30" rows="10" />
        <textarea name="" id="" cols="30" rows="10" />
      </div>
    )
  }
}

CreatePen.PropTypes = {
  changeHtmlCode: PropTypes.func,
}

CreatePen.defaultprops = {
  changeHtmlCode: null,
}
