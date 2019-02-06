import React from 'react'
import PropTypes from 'prop-types'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleWappMode = this.handleWappMode.bind(this)
    this.handleNormalMode = this.handleNormalMode.bind(this)
  }

  componentDidMount() {
    if (window.W && window.W.wisId) this.handleWappMode()
    else this.handleNormalMode()
  }

  handleWappMode() {
    const { setUser } = this.props
    window.W.loadData().then(({ user: { name } }) => {
      setUser(name)
    })
    console.log('wappmode :')
  }

  handleNormalMode() {
    const { setUser } = this.props
    setUser('javad')
    console.log('normalMode :')
  }

  render() {
    return null
  }
}

App.propTypes = {
  setUser: PropTypes.func,
}
App.defaultProps = {
  setUser: null,
}
