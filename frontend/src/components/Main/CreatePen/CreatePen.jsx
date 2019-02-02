import React from 'react'
import PropTypes from 'prop-types'
import { userView } from '../App/App.reducer'

import { Link } from '@reach/router'

export default class CreatePen extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  componentWillMount() {
    console.log(userView().user)
    const { fetchPen, codes } = this.props
    fetchPen(codes.writer, codes.title)
    // console.log('codes11 :', codes)
  }

  componentDidUpdate() {
    const { codes } = this.props
    // console.log('codes 22', codes)
    const iframe = document.getElementById('iframeId')
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(codes.html)
    iframe.contentWindow.document.write(`<style>${codes.css}</style>`)
    iframe.contentWindow.document.write(`<script>${codes.js}</script>`)
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

  render() {
    const { codes } = this.props
    console.log('codes 333 : ', codes)

    return (
      <div style={{ width: '320px', border: '1px solid red' }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Dashboard">Dashboard</Link>
        <br />
        <button onClick={() => this.handleSaveClick()}>Save Pen</button>
        <p>CreatePen</p>

        <input
          onChange={e => this.handleChange(e.target.value, 'title')}
          // defaultValue={codes.title}
          value={codes.title}
          placeholder="title"
          type="text"
        />

        <input
          onChange={e => this.handleChange(e.target.value, 'writer')}
          // defaultValue={codes.writer}
          value={codes.writer}
          placeholder="writer"
          type="text"
        />

        <textarea
          onChange={e => this.handleChange(e.target.value, 'html')}
          // defaultValue={codes.html}
          value={codes.html}
          name="1"
          id=""
          cols="38"
          rows="7"
          placeholder="Html"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'css')}
          // defaultValue={codes.css}
          value={codes.css}
          name="2"
          id=""
          cols="38"
          rows="7"
          placeholder="css"
        />
        <textarea
          onChange={e => this.handleChange(e.target.value, 'js')}
          // defaultValue={codes.js}
          value={codes.js}
          name=""
          id=""
          cols="38"
          rows="7"
          placeholder="js"
        />
        <button onClick={() => this.handleFullScreenClick()}>fullScreen</button>
        <iframe
          display="block"
          frameBorder="1"
          width="800px"
          style={{ background: 'white' }}
          allowFullScreen="true"
          height="200px"
          title="peneliteIframe"
          id="iframeId"
          src=""
        />
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
