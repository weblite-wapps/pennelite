import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
// local modules
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import classes from '../../RecentPens.scss'
// svgs
import Disliked from '../../../Svgs/disliked'

const PenItems = ({ user, pens, send, like, penClick }) =>
  pens.map(pen => (
    <div className={classes.penItems} key={`${pen.writer}${pen.title}`}>
      <div className={classes.penHeader} role="presentation">
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

      <div className={classes.penFooter}>
        <div className={classes.buttonPanel}>
          <Button
            // color="secondary"
            // variant="contained"
            className={classes.edit}
            onClick={() => penClick({ ...pen, mode: 'EDIT' })}
          >
            EDIT
          </Button>
          <button
            className={classes.run}
            onClick={() => penClick({ ...pen, mode: 'RUN' })}
          >
            RUN
          </button>
          <button
            className={classes.send}
            onClick={() => send(pen.writer, pen.title, 'wis')}
          >
            SEND
          </button>
        </div>
        <div className={classes.likesPanel}>
          {pen.likeCnt}
          <div>
            <Disliked
              onClick={() => like(user, pen._id)}
              className={classes.disliked}
            />
          </div>
        </div>
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
