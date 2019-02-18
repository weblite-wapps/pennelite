// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
// import { IconButton } from 'weblite-web-relite'
import FullScreen from '../Svgs/FullScreen'

// styles
import classes from '../../CreatePen.scss'

class Iframe extends Component {
  constructor(props) {
    super(props)
    this.fullScreen = this.fullScreen.bind(this)
    this.run = this.run.bind(this)
  }

  run() {
    const { htmlContent, cssContent, jsContent, runMode } = this.props
    const iRef = this.iframeRef.contentWindow.document
    iRef.open()
    iRef.write(htmlContent)
    iRef.write(`<style>${cssContent}</style>`)
    iRef.write(`<script>${jsContent}</script>`)
    iRef.close()
    runMode()
  }

  fullScreen() {
    const iRef = this.iframeRef
    if (!document.fullscreenElement) {
      iRef
        .requestFullscreen()
        .then({})
        .catch(err => {
          console.log(
            `Error attempting to enable full-screen mode: ${err.message} (${
              err.name
            })`,
          )
        })
    } else {
      document.exitFullscreen()
    }
  }

  render() {
    const { previewIsOpen } = this.props
    return (
      <div>
        <FullScreen className={classes.fullScreen} />
        {/* <button type="button" onClick={this.fullScreen}> */}
        {/* fullScreen */}
        {/* </button> */}
        <button type="button" onClick={this.run}>
          run
        </button>
        <iframe
          style={{
            display: previewIsOpen ? '' : 'none',
          }}
          className={classes.iframe}
          width="300px"
          ref={iframe => {
            this.iframeRef = iframe
          }}
          allowFullScreen
          height="200px"
          title="penneliteIframe"
          id="iframe"
        />
      </div>
    )
  }
}

Iframe.propTypes = {
  htmlContent: PropTypes.string,
  cssContent: PropTypes.string,
  jsContent: PropTypes.string,
  previewIsOpen: PropTypes.bool,
  runMode: PropTypes.func,
}

Iframe.defaultProps = {
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  previewIsOpen: false,
  runMode: Function.prototype,
}

export default Iframe
