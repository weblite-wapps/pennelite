// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
import { IconButton } from 'weblite-web-relite'
import Menu from './Components/Menu/Menu.container'
import Codes from './Components/Codes/Codes.container'
import Iframe from './Components/Iframe/Iframe.container'
import Header from './Components/Header/Header.container'
import Edit from './Components/Svgs/Edit'

// styles
import classes from './CreatePen.scss'

class CreatePen extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.iRef = React.createRef()
    this.runClick = this.runClick.bind(this)
  }

  componentWillMount() {
    const { fetchPen, writerName, title, setWriter, appUser } = this.props
    setWriter(appUser)
    // fetchPen(writerName, title)
  }

  handleChange(text, type) {
    const { changePen } = this.props
    changePen(text, type)
    // console.log('text, type :', text, type)
  }

  runClick() {
    const { updatePen } = this.props
    updatePen()
  }

  render() {
    const {
      isMenuOpen,
      changeMenu,
      closeMenu,
      changePreviewMode,
      previewIsOpen,
      changeViewMode,
      viewMode,
      tabIndex,
      clearState,
      writerName,
      title,
      htmlContent,
      cssContent,
      jsContent,
      changeTab,
      changePen,
      titleModeChange,
      editableTitle,
    } = this.props
    // console.log('codes 333 : ', title)
    return (
      <div className={classes.root}>
        <Header clearState={clearState} changeMenu={changeMenu} />
        <div className={classes.title_run}>
          <div style={{ display: 'flex' }}>
            {(editableTitle && (
              <input
                className={classes.title}
                onChange={e => this.handleChange(e.target.value, 'title')}
                value={title}
                placeholder="title"
                type="search"
              />
            )) || <div style={{ width: '50px' }}>{title}</div>}
            <Edit onClick={titleModeChange} className={classes.edit} />
          </div>
          <IconButton onClick={this.runClick} className={classes.run}>
            RUN
          </IconButton>
        </div>
        <Menu
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          changePreviewMode={changePreviewMode}
          changeViewMode={changeViewMode}
        />

        <p>written by : {writerName} </p>

        <Iframe
          // ref={this.iRef}
          writerName={writerName}
          title={title}
          htmlContent={htmlContent}
          cssContent={cssContent}
          jsContent={jsContent}
          previewIsOpen={previewIsOpen}
        />
        <Codes
          viewMode={viewMode}
          tabIndex={tabIndex}
          htmlContent={htmlContent}
          cssContent={cssContent}
          jsContent={jsContent}
          changeTab={changeTab}
          changePen={changePen}
        />
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
