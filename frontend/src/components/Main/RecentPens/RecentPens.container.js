// modules
import { connect } from 'react-redux'
// components
import RecentPens from './RecentPens'
// views
// import   isLoadingView,
// tabIndexView,
//  aboutModeView
// './RecentPens.reducer'

// actions
import { dispatchFetchRecentPens } from './RecentPens.action'

const mapStateToProps = () => ({
  //   isLoading: isLoadingView(),
  // tabIndex: tabIndexView(),
  //   aboutMode: aboutModeView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
  //   setAPI: dispatchSetApi,
  //   fetchTodayData: dispatchFetchTodayData,
  //   setAboutMode: dispatchSetAboutMode,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
