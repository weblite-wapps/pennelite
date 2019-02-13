// refactor this kind of shit

// Modules
import * as R from 'ramda'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
// local modules
import PenItems from './Contents/PenItems'

class Recentpens extends Component {
  componentDidMount() {
    const { fetchPens } = this.props
    fetchPens()
    this.Send = this.Send.bind(this)
  }
  // in container

  // handlePenClick({ writer, title }) {
  //   const { setWriterAndTitleChoosedPen } = this.props
  //   console.log('writer11 title :', writer, title)
  //   setWriterAndTitleChoosedPen(writer, title)
  // }

  Send() {
    const { W } = window
    console.log('send')
    // W.sendMessageToCurrentChat({})
  }

  render() {
    const { pens, setWriterAndTitleChoosedPen } = this.props

    return (
      <div style={{ width: '300px', border: '2px solid black' }}>
        <Link to="/CreatePen">CreatePen</Link>
        <br />
        <Link to="/Dashboard">Dashboard</Link>
        <p>Recent pens</p>
        <PenItems
          pens={pens}
          send={this.Send}
          setWriterAndTitleChoosedPen={setWriterAndTitleChoosedPen}
        />
      </div>
    )
  }
}

Recentpens.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({
      writer: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  setWriterAndTitleChoosedPen: PropTypes.func,
}

Recentpens.defaultProps = {
  fetchPens: '',
  pens: [],
  setWriterAndTitleChoosedPen: Function.prototype,
}

export default Recentpens
