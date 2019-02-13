// modules
import React, { Component } from 'react'
import PropTypes, { shape } from 'prop-types'
import { Link } from '@reach/router'
// local modules
import PenItems from './Contents/PenItems'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.handlePenClick = this.handlePenClick.bind(this)
    this.send = this.send.bind(this)
  }

  componentWillMount() {
    const { user, fetchPens } = this.props
    fetchPens(user)
  }

  handlePenClick({ title }) {
    const { user, setUserAndTitleChoosedPen } = this.props
    setUserAndTitleChoosedPen(user, title)
  }

  send(user, title) {
    const { W } = window
    // W.sendMessageToCurrentChat({})
    console.log('save is clicked', user, title)
  }

  render() {
    const { pens, user } = this.props

    return (
      <div style={{ width: '350px', border: '2px solid black' }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/CreatePen">CreatePen</Link>
        <p>Dashboard</p>

        <PenItems
          pens={pens}
          handlePenClick={this.handlePenClick}
          send={this.send}
          user={user}
        />
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({ writer: PropTypes.string, title: PropTypes.string }),
  ),
  setUserAndTitleChoosedPen: PropTypes.func,
  user: PropTypes.string,
}

Dashboard.defaultProps = {
  fetchPens: Function.prototype,
  pens: [],
  setUserAndTitleChoosedPen: Function.prototype,
  user: 'javad',
}

export default Dashboard
