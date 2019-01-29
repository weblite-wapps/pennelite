import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

export default class CreatePen extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  componentWillMount() {
    const { fetchPen, codes } = this.props
    fetchPen(codes.writer, codes.title)
    console.log('codes11 :', codes)
  }

  componentDidUpdate() {
    const { codes } = this.props
    console.log('codes 22', codes)
    const iframe = document.getElementById('iframeId')
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(codes.html)
    iframe.contentWindow.document.write(`<style>${codes.css}</style>`)
    iframe.contentWindow.document.write(`<script>${codes.js}</script>`)
    iframe.contentWindow.document.close()
  }

  componentWillUnmount() {
    console.log('componentWillUnmount :')
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
    const { codes } = this.props
    console.log('codes 333 : ', codes)

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/CreatePen">CreatePen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <button onClick={() => this.handleSaveClick()}>Save Pen</button>
        <p>CreatePen</p>

        <input
          onChange={e => this.handleChange(e.target.value, 'title')}
          defaultValue={codes.title}
          value={codes.title}
          placeholder="title"
          type="text"
        />

        <input
          onChange={e => this.handleChange(e.target.value, 'writer')}
          defaultValue={codes.writer}
          value={codes.writer}
          placeholder="writer"
          type="text"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'html')}
          defaultValue={codes.html}
          value={codes.html}
          name="1"
          id=""
          cols="100"
          rows="10"
          placeholder="Html"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'css')}
          defaultValue={codes.css}
          value={codes.css}
          name="2"
          id=""
          cols="100"
          rows="10"
          placeholder="css"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'js')}
          defaultValue={codes.js}
          value={codes.js}
          name=""
          id=""
          cols="100"
          rows="10"
          placeholder="js"
        />
        <iframe title="peneliteIframe" id="iframeId" src="" frameBorder="0" />
      </div>
    )
  }
}

CreatePen.propTypes = {
  fetchPen: PropTypes.func,
  changePen: PropTypes.func,
  codes: PropTypes.objectOf(PropTypes.string),
  savePen: PropTypes.func.isRequired,
}

CreatePen.defaultProps = {
  fetchPen: null,
  changePen: null,
  codes: null,
}
