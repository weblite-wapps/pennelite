// Modules
import React from 'react'
import PropTypes from 'prop-types'
// material Components
import { Tab, Tabs } from '@material-ui/core'

export default class CodesContent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(event, value) {
    const { changeTab } = this.props
    changeTab(value)
    // console.log('event, value', event, value)
  }

  handleCodeChange(text, type) {
    const { changePen } = this.props
    console.log('text, type :', text, type)
    changePen(text, type)
  }

  render() {
    const {
      viewMode,
      tabIndex,
      htmlContent,
      cssContent,
      jsContent,
    } = this.props
    return (
      <div>
        {viewMode === 'tabular' && (
          <Tabs scrollable value={tabIndex} onChange={this.handleTabChange}>
            <Tab label="html" />
            <Tab label="css" />
            <Tab label="js" />
          </Tabs>
        )}
        {(viewMode === 'simple' || tabIndex === 0) && (
          <textarea
            onChange={e => this.handleCodeChange(e.target.value, 'html')}
            value={htmlContent}
            cols="38"
            rows="7"
            placeholder="Html"
          />
        )}
        {(viewMode === 'simple' || tabIndex === 1) && (
          <textarea
            onChange={e => this.handleCodeChange(e.target.value, 'css')}
            value={cssContent}
            cols="38"
            rows="7"
            placeholder="css"
          />
        )}
        {(viewMode === 'simple' || tabIndex === 2) && (
          <textarea
            onChange={e => this.handleCodeChange(e.target.value, 'js')}
            value={jsContent}
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
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  changeTab: Function.prototype,
  changePen: Function.prototype,
}
