// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import Menu from './Components/Menu/Menu.container'
import Codes from './Components/Codes/Codes.container'
// local modules
import Iframe from './Components/Iframe/Iframe.container'

class CreatePen extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  componentWillMount() {
    const { fetchPen, writerName, title, setWriter, appUser } = this.props
    setWriter(appUser)
    fetchPen(writerName, title)
  }

  handleChange(text, type) {
    const { changePen } = this.props
    changePen(text, type)
    // console.log('text, type :', text, type)
  }

  handleSaveClick() {
    const { savePen } = this.props
    savePen()
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
    } = this.props
    // console.log('codes 333 : ', codes)
    return (
      <div style={{ width: '320px', border: '1px solid red' }}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button type="button" onClick={changeMenu}>
                    Menu
                  </button>
                </td>
                <td>
                  <button type="button" onClick={clearState}>
                    <Link to="/">Home</Link>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={clearState}>
                    <Link to="/Dashboard">Dashboard</Link>
                  </button>
                </td>
                <button type="button" onClick={this.handleSaveClick}>
                  Save pen
                </button>
              </tr>
            </tbody>
          </table>

          <p>CreatePen</p>
        </div>
        <div onClick={closeMenu}>
          <Menu
            isMenuOpen={isMenuOpen}
            changePreviewMode={changePreviewMode}
            changeViewMode={changeViewMode}
          />
        </div>

        <p>written by : {writerName} </p>

        <div>
          <input
            onChange={e => this.handleChange(e.target.value, 'title')}
            value={title}
            placeholder="title"
            type="text"
          />
        </div>
        <Iframe
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
  savePen: PropTypes.func.isRequired,
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
}

export default CreatePen
