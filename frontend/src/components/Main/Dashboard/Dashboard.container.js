import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import { dispatchFetchWriterPens } from './Dashboard.action'
import { userPensView } from './Dashboard.reducer'
import { appUserView } from '../App/App.reducer'
import { dispatchSetWriterAndTitle } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: userPensView(),
  user: appUserView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchWriterPens,
  setUserAndTitleChoosedPen: dispatchSetWriterAndTitle,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
