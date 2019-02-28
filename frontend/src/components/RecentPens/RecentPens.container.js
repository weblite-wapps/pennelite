// modules
import { connect } from 'react-redux'
// components
import RecentPens from './RecentPens'
// views
import {
  pensView,
  searchIsShownView,
  menuIsShownView,
} from './RecentPens.reducer'

// actions
import {
  dispatchFetchRecentPens,
  dispatchSetSearchIsShown,
  dispatchSetMenuIsShown,
  dispatchSetCloseMenu,
} from './RecentPens.action'
import { dispatchSetWriterTitle } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: pensView(),
  showSearch: searchIsShownView(),
  isMenuOpen: menuIsShownView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
  penClick: dispatchSetWriterTitle,
  menuClick: dispatchSetMenuIsShown,
  searchClick: dispatchSetSearchIsShown,
  closeMenu: dispatchSetCloseMenu,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
