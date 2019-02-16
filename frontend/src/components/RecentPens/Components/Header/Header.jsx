import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '@reach/router'
// module

// Svgs
import Plus from '../../Svgs/Plus'
import More from '../../Svgs/more'
import Menu from './Components/Menu.container'
// style
import classes from '../../RecentPens.scss'

const Header = ({ menuClick, ...props }) => (
  <header className={classes.header}>
    <Link to="/CreatePen">
      <Plus className={classes.plus} />
    </Link>

    <div
      className={classes.title}
      onClick={() => console.log('go to home')}
      role="presentation"
    >
      <div className={classes.pene}>PENNE</div>
      <div className={classes.lite}>LITE</div>
    </div>

    {/* <Link to="/Dashboard"> */}
    <More onClick={() => menuClick()} className={classes.search} {...props} />
    <Menu {...props} />
    {/* </Link> */}
  </header>
)

Header.propTypes = {
  //   searchClick: PropTypes.func,

  menuClick: PropTypes.func,
}

Header.defaultProps = {
  //   searchClick: Function.prototype,
  menuClick: false,
}
export default Header
