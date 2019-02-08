// modules
import { connect } from 'react-redux'
// components
import RecentPens from './RecentPens'
// views
import { pensView } from './RecentPens.reducer'

// actions
import { dispatchFetchRecentPens } from './RecentPens.action'
import { dispatchSetWriterAndTitle } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: pensView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
  setUserAndTitleChoosedPen: dispatchSetWriterAndTitle,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
