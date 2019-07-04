// Modules
import React from 'react'
import PropTypes from 'prop-types'
// modules
import FullScreen from '../Svgs/FullScreen'
// Styles
import classes from './App.scss'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.fullScreen = this.fullScreen.bind(this)
  }

  componentWillMount() {
    const { fetchPen } = this.props
    if (window && window.W) {
      window.W.loadData().then(({ customize: { _id } }) => {
        console.log('_id ', _id)
        if (_id) fetchPen({ _id })
      })
    } else fetchPen({ _id: '5d19353d316e8f5678313c10' })
  }

  componentDidUpdate() {
    const { pen } = this.props
    const iframe = document.getElementById('iframeId')
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(pen.html)
    iframe.contentWindow.document.write(`<style>${pen.css}</style>`)
    iframe.contentWindow.document.write(`<script>${pen.js}</script>`)
    iframe.contentWindow.document.close()
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
    const {
      pen: { title },
    } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.title}>{title}</div>
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
        <FullScreen onClick={this.fullScreen} className={classes.fullScreen} />
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
