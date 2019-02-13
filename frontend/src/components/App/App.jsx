// modules
import { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { setUser } = this.props
    window.W.loadData().then(({ user: { name } }) => {
      setUser(name)
      // TODO SET USER AND WIS ID
    })
    console.log('wappmode :')
  }

  handleNormalMode() {
    const { setUser } = this.props
    setUser('javad')
    // console.log('normalMode :')
  }

  render() {
    return null
  }
}

App.propTypes = {
  setUser: PropTypes.func,
}
App.defaultProps = {
  setUser: Function.prototype,
}
