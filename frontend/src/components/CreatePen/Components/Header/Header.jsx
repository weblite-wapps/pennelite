import React from 'react'
import PropTypes from 'prop-types'

// module
import { Link } from '@reach/router'

// Svgs
import More from '../Svgs/More'
import Close from '../Svgs/Close'
// style
import classes from '../../CreatePen.scss'

const Header = ({ clearState, changeMenu }) => (
  <header className={classes.header}>
    <Link to="/" onClick={clearState}>
      <Close className={classes.close} />
    </Link>
    <div className={classes.pennelite}>
      <div className={classes.pene}>PENNE</div>
      <div className={classes.lite}>LITE</div>
    </div>
    <More className={classes.more} onClick={changeMenu} />
  </header>
)

Header.propTypes = {
  clearState: PropTypes.func,
  changeMenu: PropTypes.func,
}

Header.defaultProps = {
  clearState: Function.prototype,
  changeMenu: Function.prototype,
}
export default Header
