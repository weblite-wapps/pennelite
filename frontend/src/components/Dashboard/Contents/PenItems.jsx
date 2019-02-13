import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

const PenItems = ({ pens, handlePenClick, send, user }) =>
  pens.map(pen => (
    <div
      key={pen.title}
      style={{ border: '2px solid black', margin: '0px 40px' }}
    >
      <div onClick={() => handlePenClick(pen)}>
        <Link to="/CreatePen">
          <ul>
            <li>{pen.title}</li>
          </ul>
        </Link>
      </div>
      <div>
        <button type="button" onClick={() => send(user, pen.title)}>
          Send
        </button>
      </div>
    </div>
  ))

PenItems.propTypes = {
  send: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({
      writer: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  handlePenClick: PropTypes.func,
  user: PropTypes.string,
}

PenItems.defaultProps = {
  send: Function.prototype,
  pens: [],
  handlePenClick: Function.prototype,
  user: 'javad',
}
export default PenItems
