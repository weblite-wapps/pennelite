// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import More from './../Svgs/more'
import Close from './../Svgs/Close'

//Styles
import classes from './App.scss'
class LeftIcon extends Component {
  render() {
    const { page } = this.props
    return <>{page === 'CreatePen' && <Close />}</>
  }
}

LeftIcon.propTypes = {}
LeftIcon.defaultProps = {}

class RightIcon extends Component {
  render() {
    const { page } = this.props
    return <>{page === 'CreatePen' && <More />}</>
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
