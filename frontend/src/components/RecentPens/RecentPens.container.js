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
import { dispatchSetWriterAndTitle } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: pensView(),
  showSearch: searchIsShownView(),
  isMenuOpen: menuIsShownView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
  penClick: dispatchSetWriterAndTitle,
  send: (user, title, wisId) =>
    window.W.sendMessageToCurrentChat('wapp', {
      wappId: '',
      wisId,
      user,
      title,
    }),
  menuClick: dispatchSetMenuIsShown,
  searchClick: dispatchSetSearchIsShown,
  closeMenu: dispatchSetCloseMenu,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
