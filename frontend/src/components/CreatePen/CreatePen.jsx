// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
import Header from './Components/Header/Header.container'
import Content from './CreatePen.helper'

// styles
import classes from './CreatePen.scss'

class CreatePen extends Component {
  constructor(props) {
    super(props)
    // this.iRef = React.createRef()
  }

  // componentWillMount() {
  //   const { fetchPen, writerName, title, setWriter, appUser } = this.props
  //   setWriter(appUser)
  //   // fetchPen(writerName, title)
  // }

  render() {
    const { ...props } = this.props
    return (
      <div>
        {/* className={classes.root} */}
        <Header {...props} />
        <Content {...props} />
      </div>
    )
  }
}

CreatePen.propTypes = {}

CreatePen.defaultProps = {}

export default CreatePen
