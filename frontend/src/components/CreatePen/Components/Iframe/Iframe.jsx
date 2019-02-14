// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Iframe extends Component {
  constructor(props) {
    super(props)
    this.fullScreen = this.fullScreen.bind(this)
    this.run = this.run.bind(this)
  }

  run() {
    const { htmlContent, cssContent, jsContent } = this.props
    const iRef = this.iframeRef.contentWindow.document
    iRef.open()
    iRef.write(htmlContent)
    iRef.write(`<style>${cssContent}</style>`)
    iRef.write(`<script>${jsContent}</script>`)
    iRef.close()
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
        <button type="button" onClick={this.fullScreen}>
          fullScreen
        </button>
        <button type="button" onClick={this.run}>
          run
        </button>
        <iframe
          width="300px"
          style={{
            background: 'white',
            display: previewIsOpen ? 'inline' : 'none',
          }}
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
}

Iframe.defaultProps = {
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  previewIsOpen: false,
}

export default Iframe
