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
  dispatchSetMenuIsShown,
  dispatchSetCloseMenu,
} from './RecentPens.action'
import { dispatchSetClickedPenId } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: pensView(),
  showSearch: searchIsShownView(),
  isMenuOpen: menuIsShownView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
  penClick: dispatchSetClickedPenId,
  menuClick: dispatchSetMenuIsShown,
  closeMenu: dispatchSetCloseMenu,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
