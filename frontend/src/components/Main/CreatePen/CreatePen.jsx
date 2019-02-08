import React from 'react'
import PropTypes from 'prop-types'
// import { ContextMenu } from 'weblite-web-relite'
import { Link } from '@reach/router'
// import { Tab, Tabs } from '@material-ui/core'
import MenuContent from './Components/MenuContent'
import CodesContent from './Components/CodesContent'

export default class CreatePen extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this)
  }

  componentWillMount() {
    const { fetchPen, writerName, title, setWriter, appUser } = this.props
    // console.log('appUser :', appUser)
    setWriter(appUser)
    fetchPen(writerName, title)
    // console.log('codes.writer, codes.title :', writerName, title)
  }

  componentDidUpdate() {
    const { htmlContent, cssContent, jsContent } = this.props
    const iframe = document.getElementById('iframeId')
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(htmlContent)
    iframe.contentWindow.document.write(`<style>${cssContent}</style>`)
    iframe.contentWindow.document.write(`<script>${jsContent}</script>`)
    iframe.contentWindow.document.close()
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

  handleFullScreenClick() {
    const element = document.getElementById('iframeId')
    if (!document.fullscreenElement) {
      element
        .requestFullscreen()
        .then({})
        .catch(err => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${
              err.name
            })`,
          )
        })
    } else {
      document.exitFullscreen()
    }
  }

  // handleTabChange(event, value) {
  //   const { changeTab } = this.props
  //   changeTab(value)
  //   // console.log('event, value', event, value)
  // }

  render() {
    const {
      // codes,
      menuIsOpen,
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
          <MenuContent
            menuIsOpen={menuIsOpen}
            changePreviewMode={changePreviewMode}
            changeViewMode={changeViewMode}
          />
        </div>

        {<p>written by : {writerName} </p>}

        <div>
          <input
            onChange={e => this.handleChange(e.target.value, 'title')}
            // defaultValue={codes.title}
            value={title}
            placeholder="title"
            type="text"
          />

          <button type="button" onClick={this.handleFullScreenClick}>
            fullScreen
          </button>
          <iframe
            width="300px"
            style={{
              background: 'white',
              display: previewIsOpen ? 'inline' : 'none',
            }}
            allowFullScreen
            height="200px"
            title="peneliteIframe"
            id="iframeId"
          />
        </div>
        <CodesContent
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
  menuIsOpen: PropTypes.bool,
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
  fetchPen: null,
  changePen: null,
  menuIsOpen: false,
  changeMenu: null,
  closeMenu: null,
  changePreviewMode: null,
  previewIsOpen: true,
  changeViewMode: null,
  viewMode: 'simple',
  tabIndex: 1,
  changeTab: null,
  setWriter: null,
  appUser: 'javad',
  clearState: null,
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  writerName: 'javad',
  title: 'no title received',
  isSaved: false,
}
