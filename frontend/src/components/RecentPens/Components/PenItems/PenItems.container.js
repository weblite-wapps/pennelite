import { connect } from 'react-redux'

import PenItems from './PenItems'
import { dispatchLikePen } from '../../RecentPens.action'
import { appUserView } from '../../../App/App.reducer'

const mapdispatchToProps = () => ({
  send: (user, title, wisId) =>
    window.W.sendMessageToCurrentChat('wapp', {
      wappId: '',
      wisId,
      user,
      title,
    }),

  like: (user, _id) => dispatchLikePen(user, _id),
})

const mapStateToProps = () => ({
  user: appUserView(),
})

export default connect(
  mapStateToProps,
  mapdispatchToProps,
)(PenItems)
