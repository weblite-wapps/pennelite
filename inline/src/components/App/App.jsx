// Modules
import React from 'react'
import PropTypes from 'prop-types'
// modules

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchPen } = this.props
    if (window.W && window.W.user && window.W.title)
      fetchPen({ user: window.W.user, title: window.W.title })
    else fetchPen({ user: 'javad', title: 'title' })
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

  render() {
    return (
      <div>
        {' '}
        <iframe
          frameBorder="1"
          style={{ background: 'white' }}
          allowFullScreen
          title="peneliteInlineIframe"
          id="iframeId"
          src=""
        />
      </div>
    )
  }
}

App.propTypes = {
  fetchPen: PropTypes.func,
  pen: PropTypes.objectOf(PropTypes.string),
}

App.defaultProps = {
  fetchPen: null,
  pen: {},
}
