// Modules
import * as R from 'ramda'
import React from 'react'
import PropTypes, { object } from 'prop-types'
import { Link } from '@reach/router'
// local modules
// modules

export default class Recentpens extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSendClick = this.handleSendClick.bind(this)
  }

  componentDidMount() {
    const { fetchPens } = this.props
    fetchPens()
  }

  handleClick({ writer, title }) {
    const { setUserAndTitleChoosedPen } = this.props
    console.log('writer11 title :', writer, title)
    setUserAndTitleChoosedPen(writer, title)
  }

  handleSendClick() {
    const { W } = window
    // W.sendMessageToCurrentChat({})
  }

  render() {
    const { pens } = this.props
    const penItems = pens.map(pen => (
      <div
        key={`${pen.writer} + ${pen.title}`}
        style={{ border: '1px solid red' }}
      >
        <Link to="/CreatePen">
          <div
            onClick={() => this.handleClick(pen)}
            key={`${pen.writer} + ${pen.title}`}
            style={{ border: '1px solid blue', margin: '0px 20px' }}
          >
            <table>
              <tbody>
                <tr style={{ display: 'inline-block' }}>
                  <td>{pen.title}</td>
                </tr>
                <tr />
                <tr style={{ display: 'inline-block' }}>
                  <td>{pen.writer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>

        <div style={{ border: '1px solid green', margin: '0px 20px' }}>
          <button type="button" onClick={() => this.handleSendClick()}>
            Send
          </button>
        </div>
      </div>
    ))
    return (
      <div style={{ width: '300px', border: '2px solid black' }}>
        <Link to="/CreatePen">CreatePen</Link>
        <br />
        <Link to="/Dashboard">Dashboard</Link>
        <p>Recent pens</p>
        {penItems}
      </div>
    )
  }
}

Recentpens.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(object),
  setUserAndTitleChoosedPen: PropTypes.func,
}

Recentpens.defaultProps = {
  fetchPens: '',
  pens: [],
  setUserAndTitleChoosedPen: null,
}
