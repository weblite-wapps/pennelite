import React from 'react'
import PropTypes, { object } from 'prop-types'
import { Link } from '@reach/router'
// modules

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSendClick = this.handleSendClick.bind(this)
  }

  componentWillMount() {
    const { user, fetchPens } = this.props
    fetchPens(user)
  }

  handleClick({ title }) {
    const { user, setUserAndTitleChoosedPen } = this.props
    setUserAndTitleChoosedPen(user, title)
  }

  handleSendClick({ writer, title }) {
    const { W } = window
    // W.sendMessageToCurrentChat({})
    console.log('save is clicked', writer, title)
  }

  render() {
    const { pens } = this.props
    const penitems = pens.map(pen => (
      <div
        key={pen.title}
        style={{ border: '2px solid black', margin: '0px 40px' }}
      >
        <div onClick={() => this.handleClick(pen)}>
          <Link to="/CreatePen">
            <ul>
              <li>{pen.title}</li>
            </ul>
          </Link>
        </div>
        <div>
          <button type="button" onClick={() => this.handleSendClick(pen)}>
            Send
          </button>
        </div>
      </div>
    ))
    return (
      <div style={{ width: '350px', border: '2px solid black' }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/CreatePen">CreatePen</Link>
        <p>Dashboard</p>
        {penitems}
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(object),
  user: PropTypes.string,
  setUserAndTitleChoosedPen: PropTypes.func,
}

Dashboard.defaultProps = {
  fetchPens: null,
  pens: [],
  user: 'javad',
  setUserAndTitleChoosedPen: null,
}
