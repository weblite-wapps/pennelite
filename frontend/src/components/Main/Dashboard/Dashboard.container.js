import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import { dispatchFetchUserPens } from './Dashboard.action'
import { userPensView } from './Dashboard.reducer'
import { userView } from '../App/App.reducer'
import { dispatchSetUserAndTitle } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: userPensView(),
  user: userView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchUserPens,
  setUserAndTitleChoosedPen: dispatchSetUserAndTitle,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
