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
  penClick: dispatchSetWriterAndTitle,
  send: (user, title, wisId) =>
    window.W.sendMessageToCurrentChat('wapp', {
      wappId: '',
      wisId,
      user,
      title,
    }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
