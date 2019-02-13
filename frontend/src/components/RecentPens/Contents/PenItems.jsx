import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

const PenItems = ({ pens, send, setWriterAndTitleChoosedPen }) =>
  pens.map(pen => (
    <div key={`${pen.writer}${pen.title}`} style={{ border: '1px solid red' }}>
      <Link to="/CreatePen">
        <div
          onClick={() => setWriterAndTitleChoosedPen(pen)}
          style={{ border: '1px solid blue', margin: '0px 20px' }}
          role="presentation"
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
        <button type="button" onClick={send}>
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
  setWriterAndTitleChoosedPen: PropTypes.func,
}

PenItems.defaultProps = {
  send: Function.prototype,
  pens: [],
  setWriterAndTitleChoosedPen: Function.prototype,
}
export default PenItems
