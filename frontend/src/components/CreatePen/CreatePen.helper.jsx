// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Codes from './Components/Codes/Codes.container'
import Iframe from './Components/Iframe/Iframe.container'
import More from './Components/Menu/Menu.container'

class Content extends Component {
  render() {
    const { writerName, page } = this.props
    return (
      <>
        <More {...this.props} />
        {/* <p>written by : {writerName} </p> */}
        <Iframe
          // ref={this.iRef}
          {...this.props}
        />
        <Codes {...this.props} />
      </>
    )
  }
}

Content.propTypes = {}

Content.defaultProps = {}

export default Content
