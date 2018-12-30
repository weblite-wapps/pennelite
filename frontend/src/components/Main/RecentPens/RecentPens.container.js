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
// import  dispatchChangeTab,
//   dispatchSetApi,
//   dispatchFetchTodayData,
//   dispatchSetAboutMode,
// './RecentPens'

const mapStateToProps = () => ({
  //   isLoading: isLoadingView(),
  // tabIndex: tabIndexView(),
  //   aboutMode: aboutModeView(),
})

const mapDispatchToProps = () => ({
  // changeTab: dispatchChangeTab,
  //   setAPI: dispatchSetApi,
  //   fetchTodayData: dispatchFetchTodayData,
  //   setAboutMode: dispatchSetAboutMode,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
