// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './App.helper'
export default class App extends Component {
  // constructor(props) {
  //   super(props)
  // this.handleWappMode = this.handleWappMode.bind(this)
  // this.handleNormalMode = this.handleNormalMode.bind(this)
  // }

  componentDidMount() {
    // if (window.W && window.W.wisId) this.handleWappMode()
    // else this.handleNormalMode()
    if (process.env.NODE_ENV === 'production') this.handleWappMode()
    else this.handleNormalMode()
  }

  handleWappMode() {
    const { setData } = this.props
    window.W.loadData().then(({ user: { name } }) => {
      setData(name, window.W.wisId)
      // TODO SET USER AND WIS ID
    })
    console.log('wappmode :')
  }

  handleNormalMode() {
    const { setData } = this.props
    setData('javad', '110')
    // console.log('normalMode :')
  }

  render() {
    return <Header {...this.props} />
  }
}

App.propTypes = {
  setData: PropTypes.func,
}
App.defaultProps = {
  setData: Function.prototype,
}
