// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
import Header from './Components/Header/Header.container'
import Content from './CreatePen.helper'

// styles
import classes from './CreatePen.scss'

class CreatePen extends Component {
  constructor(props) {
    super(props)
    // this.iRef = React.createRef()
  }

  render() {
    return (
      <div className={classes.root}>
        <Header {...this.props} />
        <Content {...this.props} />
      </div>
    )
  }
}

CreatePen.propTypes = {}

CreatePen.defaultProps = {}

export default CreatePen
