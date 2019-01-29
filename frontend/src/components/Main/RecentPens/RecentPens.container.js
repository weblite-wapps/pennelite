// modules
import { connect } from 'react-redux'
// components
import RecentPens from './RecentPens'
// views
import { pensView } from './RecentPens.reducer'

// actions
import { dispatchFetchRecentPens } from './RecentPens.action'

const mapStateToProps = () => ({
  //   isLoading: isLoadingView(),
  pens: pensView(),
  // tabIndex: tabIndexView(),
  //   aboutMode: aboutModeView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
