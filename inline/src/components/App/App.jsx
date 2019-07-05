// Modules
import React from 'react'
import PropTypes from 'prop-types'
// modules
import FullScreen from '../Svgs/FullScreen'
// Styles
import './App.scss'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.fullScreen = this.fullScreen.bind(this)
  }

  componentWillMount() {
    const { fetchPen } = this.props
    if (window && window.W) {
      window.W.loadData().then(({ customize }) => {
        console.log("id inline: ", customize)
        // if (id) fetchPen({ id })
      })
    // } else fetchPen({ id: '' })
  }
}

  componentDidUpdate() {
    const { pen } = this.props
    const iframe = this.iframeRef.contentWindow.document
    iframe.open()
    iframe.write(`<html><body>${pen.html}</body></html>`)
    iframe.write(`<style>${pen.css}</style>`)
    iframe.write(`<script>${pen.js}</script>`)
    iframe.close()
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
    const { pen: { title } } = this.props
    return (
      <div className='root'>
        <div className='title'>{title}</div>
        <iframe
          frameBorder="1"
          style={{ border: 'none', background: 'black' }}
          allowFullScreen
          title="peneliteInlineIframe"
          id="iframeId"
          ref={iframe => {
            this.iframeRef = iframe
          }}
          width="100%"
        />
        <FullScreen onClick={this.fullScreen} className='fullScreen' />
      </div>
    )
  }
}

App.propTypes = {
  // fetchPen: PropTypes.func,
  // pen: PropTypes.objectOf(PropTypes.string),
}

App.defaultProps = {
  // fetchPen: null,
  // pen: {},
}
