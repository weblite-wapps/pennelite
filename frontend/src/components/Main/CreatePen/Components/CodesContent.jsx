// Modules
import React from 'react'
import PropTypes, { object } from 'prop-types'
import { Tab, Tabs } from '@material-ui/core'

export default class CodesContent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(event, value) {
    const { changeTab } = this.props
    changeTab(value)
    // console.log('event, value', event, value)
  }

  handleChange(text, type) {
    const { changePen } = this.props
    console.log('text, type :', text, type)
    changePen(text, type)
  }

  render() {
    const {
      viewMode,
      tabIndex,
      //   handleChange,
      htmlContent,
      cssContent,
      jsContent,
    } = this.props
    return (
      <div>
        {viewMode === 'tabular' && (
          <Tabs
            scrollable
            style={{ width: '100%' }}
            value={tabIndex}
            onChange={this.handleTabChange}
          >
            <Tab label="html" />
            <Tab label="css" />
            <Tab label="js" />
          </Tabs>
        )}
        {(viewMode === 'simple' || tabIndex === 0) && (
          <textarea
            onChange={e => this.handleChange(e.target.value, 'html')}
            // defaultValue={codes.html}
            value={htmlContent}
            name="1"
            id=""
            cols="38"
            rows="7"
            placeholder="Html"
          />
        )}
        {(viewMode === 'simple' || tabIndex === 1) && (
          <textarea
            onChange={e => this.handleChange(e.target.value, 'css')}
            // defaultValue={codes.css}
            value={cssContent}
            name="2"
            id=""
            cols="38"
            rows="7"
            placeholder="css"
          />
        )}
        {(viewMode === 'simple' || tabIndex === 2) && (
          <textarea
            onChange={e => this.handleChange(e.target.value, 'js')}
            // defaultValue={codes.js}
            value={jsContent}
            name=""
            id=""
            cols="38"
            rows="7"
            placeholder="js"
          />
        )}
      </div>
    )
  }
}

CodesContent.propTypes = {
  //   handleTabChange: PropTypes.func,
  //   handleChange: PropTypes.func,
  viewMode: PropTypes.string,
  tabIndex: PropTypes.number,
  htmlContent: PropTypes.string,
  cssContent: PropTypes.string,
  jsContent: PropTypes.string,
  changeTab: PropTypes.func,
  changePen: PropTypes.func,
}

CodesContent.defaultProps = {
  viewMode: 'simple',
  tabIndex: 1,
  //   handleTabChange: null,
  //   handleChange: null,
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  changeTab: null,
  changePen: null,
}
