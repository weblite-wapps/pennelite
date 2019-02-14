import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { iconButton } from 'weblite-web-relite'
import classes from '../../RecentPens.scss'
import Disliked from '../../Svgs/disliked'

const PenItems = ({ pens, send, penClick }) =>
  pens.map(pen => (
    <div className={classes.penItems} key={`${pen.writer}${pen.title}`}>
      <Link to="/CreatePen">
        <div
          className={classes.penHeader}
          onClick={() => penClick(pen)}
          role="presentation"
        >
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
      </Link>

      <div className={classes.penFooter}>
        <div className={classes.buttonPanel}>
          <iconButton
            className={classes.edit}
            onClick={() => console.log('EDIT')}
          >
            EDIT
          </iconButton>
          <iconButton
            className={classes.run}
            onClick={() => console.log('RUN')}
          >
            RUN
          </iconButton>
          <iconButton
            className={classes.send}
            onClick={() => send(pen.writer, pen.title, 'wis')}
          >
            Send
          </iconButton>
        </div>
        <div className={classes.likesPanel}>
          53 <Disliked className={classes.disliked} />
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
}

PenItems.defaultProps = {
  send: Function.prototype,
  pens: [],
  penClick: Function.prototype,
}
export default PenItems
