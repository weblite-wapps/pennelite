import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
// local modules
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import '../../RecentPens.scss'
// svgs
import Disliked from '../../../Svgs/disliked'

const PenItems = ({ user, pens, send, like, penClick }) =>
  pens.map(pen => (
    <div className="penItems" key={`${pen._id}`}>
      <div className="penHeader" role="presentation">
        <table>
          <tbody>
            <tr style={{ display: 'inline-block' }}>
              <td>{pen.title}</td>
            </tr>
            <tr />
            <tr style={{ display: 'inline-block' }}>
              <td>BY: {pen.writer}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="penFooter">
        <div className="buttonPanel">
          <Link to="/CreatePen">
            <button
              // color="secondary"
              // variant="contained"
              style={{ background: '#2C2C2C', color: '#F5F5F5' }}
              className="penButton"
              onClick={() => penClick({ _id: pen._id, mode: 'EDIT' })}
            >
              EDIT
            </button>
          </Link>
          <Link to="/CreatePen">
            <button
              style={{ background: '#AA0000', color: '#F5F5F5' }}
              className="penButton"
              onClick={() => penClick({ _id: pen._id, mode: 'RUN' })}
            >
              RUN
            </button>
          </Link>
          <button
            style={{ background: '#0074AA', color: '#F5F5F5' }}
            className="penButton"
            onClick={() => send(pen.writer, pen.title, 'wis')}
          >
            SEND
          </button>
        </div>
        {/* <div className={classes.likesPanel}>
          {pen.likeCnt}
          <div>
            <Disliked
              onClick={() => like(user, pen._id)}
              className={classes.disliked}
            />
          </div>
        </div> */}
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
  penClick: PropTypes.func,
  like: PropTypes.func,
  user: PropTypes.string,
}

PenItems.defaultProps = {
  send: Function.prototype,
  pens: [],
  penClick: Function.prototype,
  like: Function.prototype,
  user: '',
}
export default PenItems
