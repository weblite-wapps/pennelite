import * as R from 'ramda'
// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
// import { IconButton } from 'weblite-web-relite'
import FullScreen from './../../../Svgs/FullScreen'

// styles
import classes from '../../CreatePen.scss'
import { dispatchChangePen } from '../../CreatePen.action'

class Iframe extends Component {
  constructor(props) {
    super(props)
    this.fullScreen = this.fullScreen.bind(this)
    // this.run = this.run.bind(this)
  }

  // componentWillMount() {
  //   const { htmlContent } = this.props
  //   console.log('componentWillMount htmlContent ', htmlContent)
  // }

  componentDidMount() {
    // const { htmlContent, cssContent, jsContent } = this.props
    // console.log('htmlContent ', htmlContent)
    // const iRef = this.iframeRef.contentWindow.document

    // iRef.open()
    // iRef.write(htmlContent)
    // iRef.write(`<style>${cssContent}</style>`)
    // iRef.write(`<script>${jsContent}</script>`)
    // iRef.close()
    // const iRef = this.iframeRef.contentWindow.document

    const { fPen, writerName, title, changeIframe } = this.props
    fPen('/fetchSinglePen')
      .query({ writer: writerName, title })
      .then(res => res.body)
      .then(R.forEachObjIndexed(dispatchChangePen))
      .then(({ html, css, js }) => {
        changeIframe(html, 'iframeHtml')
        changeIframe(css, 'iframeCss')
        changeIframe(js, 'iframeJs')
      })
      .catch(console.log)
    // R.map(console.log, body)
    // { body }) => {
    // console.log(html)
    // dispatchChangePen(html, 'html')
    // iRef.write(html)
    // iRef.write(`<style>${css}</style>`)
    // iRef.write(`<script>${js}</script>`)
    // }
    // )
    // .then(res => console.log('res', res.body))
    // .then(res => console.log('res', res.body))
    // iRef.write(htmlContent)
    // iRef.write(`<style>${cssContent}</style>`)
    // iRef.write(`<script>${jsContent}</script>`)
    // iRef.close()
  }

  // shouldComponentUpdate() {}

  componentDidUpdate() {
    const { html, css, js } = this.props
    const iRef = this.iframeRef.contentWindow.document
    iRef.open()
    iRef.write(html)
    iRef.write(`<style>${css}</style>`)
    iRef.write(`<script>${js}</script>`)
    iRef.close()
  }

  // run() {
  //   const { htmlContent, cssContent, jsContent, runMode } = this.props
  //   const iRef = this.iframeRef.contentWindow.document
  //   iRef.open()
  //   iRef.write(htmlContent)
  //   iRef.write(`<style>${cssContent}</style>`)
  //   iRef.write(`<script>${jsContent}</script>`)
  //   iRef.close()
  //   runMode()
  // }

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
        {/* <button type="button" > */}
        {/* fullScreen */}
        {/* </button> */}
        {/* <button type="button" onClick={this.run}>
          run
        </button> */}
        <div
          style={{
            display: previewIsOpen ? '' : 'none',
          }}
        >
          <FullScreen
            onClick={this.fullScreen}
            className={classes.fullScreen}
          />
          <iframe
            className={classes.iframe}
            width="300px"
            // ref={ref}
            ref={iframe => {
              this.iframeRef = iframe
            }}
            allowFullScreen
            height="200px"
            title="penneliteIframe"
            id="iframe"
          />
        </div>
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
  fPen: PropTypes.func,
  writerName: PropTypes.string,
  title: PropTypes.string,
  html: PropTypes.string,
  css: PropTypes.string,
  js: PropTypes.string,
  changeIframe: PropTypes.func,
}

Iframe.defaultProps = {
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  previewIsOpen: false,
  runMode: Function.prototype,
  fPen: Function.prototype,
  writerName: 'javad',
  title: 'title 1',
  html: '',
  css: '',
  js: '',
  changeIframe: Function.prototype,
}

export default Iframe
