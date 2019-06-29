import React, { Component } from 'react'
import PropTypes from 'prop-types'

// module
import { Link } from '@reach/router'
import IconButton from '@material-ui/core/IconButton'

// Svgs

import Edit from './../../../Svgs/Edit'

// style
import classes from '../../CreatePen.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(text, type) {
    const { changePen } = this.props
    changePen(text, type)
    // console.log('text, type :', text, type)
  }

  render() {
    const { editableTitle, title, titleModeChange, updatePen } = this.props
    return (
      <div className={classes.penTitleBar}>
        <div style={{ display: 'flex' }}>
          {(editableTitle && (
            <input
              className={classes.title}
              onChange={e => this.handleChange(e.target.value, 'title')}
              value={title}
              placeholder="title"
              type="search"
            />
          )) || <div style={{ width: '50px' }}>{title}</div>}
          <Edit onClick={titleModeChange} className={classes.edit} />
        </div>
        <IconButton onClick={updatePen} className={classes.run}>
          RUN
        </IconButton>
      </div>
    )
  }
}
Header.propTypes = {
  clearState: PropTypes.func,
  changeMenu: PropTypes.func,
}

Header.defaultProps = {
  clearState: Function.prototype,
  changeMenu: Function.prototype,
}
export default Header
