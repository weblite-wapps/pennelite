// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
// local modules
import Search from './Svgs/Search'
import Plus from './Svgs/Plus'
import PenItems from './Components/PenItems/PenItems.container'
// styles
import classes from './RecentPens.scss'

class Recentpens extends Component {
  componentDidMount() {
    const { fetchPens } = this.props
    fetchPens()
  }

  render() {
    const { pens, penClick } = this.props

    return (
      <div
        className={classes.root}
        style={{ width: '300px', border: '2px solid black' }}
      >
        <header className={classes.header}>
          <Link to="/CreatePen">
            <Plus className={classes.plus} />
          </Link>
          <div className={classes.title}>
            <div className={classes.pene}>PENNE</div>
            <div className={classes.lite}>LITE</div>
          </div>

          <Link to="/Dashboard">
            <Search className={classes.search} />
          </Link>
        </header>
        <PenItems pens={pens} send={this.Send} penClick={penClick} />
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
}

Recentpens.defaultProps = {
  fetchPens: '',
  pens: [],
  penClick: Function.prototype,
}

export default Recentpens
