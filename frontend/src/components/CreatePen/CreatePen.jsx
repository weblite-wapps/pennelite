// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
import Header from './Components/Header/Header.container'
import Content from './CreatePen.helper'

// styles
import classes from './CreatePen.scss'

class CreatePen extends Component {
  constructor(props) {
    super(props)
    // this.iRef = React.createRef()
  }

  // componentWillMount() {
  //   const { fetchPen, writerName, title, setWriter, appUser } = this.props
  //   setWriter(appUser)
  //   // fetchPen(writerName, title)
  // }

  render() {
    const { ...props } = this.props
    return (
      <div>
        {/* className={classes.root} */}
        <Header {...props} />
        <Content {...props} />
      </div>
    )
  }
}

CreatePen.propTypes = {
  fetchPen: PropTypes.func,
  changePen: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  changeMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  changePreviewMode: PropTypes.func,
  previewIsOpen: PropTypes.bool,
  changeViewMode: PropTypes.func,
  viewMode: PropTypes.string,
  tabIndex: PropTypes.number,
  changeTab: PropTypes.func,
  setWriter: PropTypes.func,
  appUser: PropTypes.string,
  clearState: PropTypes.func,
  htmlContent: PropTypes.string,
  cssContent: PropTypes.string,
  jsContent: PropTypes.string,
  writerName: PropTypes.string,
  title: PropTypes.string,
  isSaved: PropTypes.bool,
  titleModeChange: PropTypes.func,
  editableTitle: PropTypes.bool,
  updatePen: PropTypes.func,
}

CreatePen.defaultProps = {
  fetchPen: Function.prototype,
  changePen: Function.prototype,
  isMenuOpen: false,
  changeMenu: Function.prototype,
  closeMenu: Function.prototype,
  changePreviewMode: Function.prototype,
  previewIsOpen: true,
  changeViewMode: Function.prototype,
  viewMode: 'simple',
  tabIndex: 1,
  changeTab: Function.prototype,
  setWriter: Function.prototype,
  appUser: 'javad',
  clearState: Function.prototype,
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  writerName: 'javad',
  title: 'no title received',
  isSaved: false,
  titleModeChange: Function.prototype,
  editableTitle: false,
  updatePen: Function.prototype,
}

export default CreatePen
