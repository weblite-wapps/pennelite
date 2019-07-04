// Modules
import React from 'react'
import PropTypes from 'prop-types'
// material Components
import { Tab, Tabs } from '@material-ui/core'
import '../../CreatePen.scss'

export default class CodesContent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(event, value) {
    const { changeTab } = this.props
    changeTab(value)
  }

  handleCodeChange(text, type) {
    const { changePen } = this.props
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
          <Tabs
            variant="scrollable"
            value={tabIndex}
            onChange={this.handleTabChange}
          >
            <Tab label="html" />
            <Tab label="css" />
            <Tab label="js" />
          </Tabs>
        )}

        {(viewMode === 'simple' || tabIndex === 0) && (
          <div className="codesPanel">
            {viewMode === 'simple' && <span className="codeTitle">html</span>}
            <textarea
              className="codes"
              onChange={e => this.handleCodeChange(e.target.value, 'html')}
              value={htmlContent}
              cols="38"
              rows="7"
            />
          </div>
        )}
        {(viewMode === 'simple' || tabIndex === 1) && (
          <div className="codesPanel">
            {viewMode === 'simple' && <span className="codeTitle">css</span>}
            <textarea
              className="codes"
              onChange={e => this.handleCodeChange(e.target.value, 'css')}
              value={cssContent}
              cols="38"
              rows="7"
            />
          </div>
        )}
        {(viewMode === 'simple' || tabIndex === 2) && (
          <div className="codesPanel">
            {viewMode === 'simple' && <span className="codeTitle">js</span>}
            <textarea
              className="codes"
              onChange={e => this.handleCodeChange(e.target.value, 'js')}
              value={jsContent}
              cols="38"
              rows="7"
            />
          </div>
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
