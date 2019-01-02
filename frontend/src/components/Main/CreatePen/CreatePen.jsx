import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

export default class CreatePen extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  componentDidUpdate() {
    const { codes } = this.props
    // console.log('codes 1', codes)
    const iframe = document.getElementById('iframeId')
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(codes.html)
    iframe.contentWindow.document.write(`<style> ${codes.css} </style>`)
    iframe.contentWindow.document.write(`<script>${codes.js}</script>`)
    iframe.contentWindow.document.close()
  }

  componentWillUnmount() {
    prompt('unmount')
  }

  handleChange(text, type) {
    const { changeHtmlCode } = this.props
    changeHtmlCode(text, type)
  }

  handleSaveClick() {
    const { savePen } = this.props
    savePen()
  }

  render() {
    const { codes } = this.props
    console.log('codes : ', codes)

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/CreatePen">CreatePen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <button onClick={() => this.handleSaveClick()}>Save Pen</button>
        <p>CreatePen</p>
        <textarea
          onChange={e => this.handleChange(e.target.value, 'html')}
          defaultValue={codes.html}
          name="1"
          id=""
          cols="30"
          rows="10"
          placeholder="Html"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'css')}
          name="2"
          id=""
          cols="30"
          rows="10"
          placeholder="css"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'js')}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="js"
        />
        <iframe title="peneliteIframe" id="iframeId" src="" frameBorder="0" />
      </div>
    )
  }
}

CreatePen.propTypes = {
  changeHtmlCode: PropTypes.func,
  codes: PropTypes.objectOf(PropTypes.string),
  savePen: PropTypes.func.isRequired,
}

CreatePen.defaultProps = {
  changeHtmlCode: null,
  codes: null,
}
