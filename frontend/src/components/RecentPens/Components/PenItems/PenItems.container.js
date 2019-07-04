import { connect } from 'react-redux'

import PenItems from './PenItems'
import { dispatchLikePen } from '../../RecentPens.action'
import { appUserView, wisView } from '../../../App/App.reducer'

const mapdispatchToProps = () => ({
  send: _id =>
    window.W.sendMessageToCurrentChat('wapp', {
      // TODO : FILL WITH INLINE WAPPID
      wappId: '5d1e07bd4e843d1078d59f88',
      wisId: '',
      _id,
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
