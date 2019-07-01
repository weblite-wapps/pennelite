// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import MoreIcon from './../Svgs/more'
import Close from './../Svgs/Close'
import Plus from './../Svgs/Plus'
import Search from './../Svgs/Search'
import More from '../App/Component/Menu/Menu.container'
import Button from '@material-ui/core/Button'
//Styles
import classes from './App.scss'
class LeftIcon extends Component {
  render() {
    const { page } = this.props
    return (
      <>
        {page === 'CreatePen' && <Close />}
        {page === 'RecentPens' && <Plus />}
        {/* {page === 'RecentPens' && <Plus />} */}
      </>
    )
  }
}

LeftIcon.propTypes = {}
LeftIcon.defaultProps = {}

class RightIcon extends Component {
  render() {
    const { page, anchorEl, openMenu } = this.props
    return (
      <>
        {page === 'CreatePen' && (
          <>
            <MoreIcon onClick={e => openMenu(e.currentTarget)}>
              <Button aria-controls="simple-menu" aria-haspopup="true" />
            </MoreIcon>
            <More anchorEl={anchorEl} id={'simple-menu'} {...this.props} />
          </>
        )}
        {page === 'RecentPens' && <Search />}
      </>
    )
  }
}

RightIcon.propTypes = {}
RightIcon.defaultProps = {}

class HeadTitle extends Component {
  render() {
    const { page } = this.props
    return (
      <>
        {
          <div className={classes.title} role="presentation">
            <div className={classes.pene}>PENNE</div>
            <div className={classes.lite}>LITE</div>
          </div>
        }
      </>
    )
  }
}
HeadTitle.propTypes = {}
HeadTitle.defaultProps = {}

export default class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <LeftIcon {...this.props} />
        <HeadTitle {...this.props} />
        <RightIcon {...this.props} />
      </div>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}
