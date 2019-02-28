// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
import PenItems from './Components/PenItems/PenItems.container'
import Header from './Components/Header/Header.container'

// styles
import classes from './RecentPens.scss'

class Recentpens extends Component {
  componentDidMount() {
    const { fetchPens } = this.props
    fetchPens()
  }

  render() {
    const { pens, penClick, showSearch, ...props } = this.props

    return (
      <div className={classes.root}>
        <Header {...props} />
        {showSearch && (
          <input
            className={classes.searchBar}
            type="text"
            placeholder="Search here ..."
          />
        )}

        <PenItems pens={pens} penClick={penClick} />
      </div>
    )
  }
}

Recentpens.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({
      writer: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  penClick: PropTypes.func,
  closeMenu: PropTypes.func,
}

Recentpens.defaultProps = {
  fetchPens: '',
  pens: [],
  penClick: Function.prototype,
  closeMenu: Function.prototype,
}

export default Recentpens
