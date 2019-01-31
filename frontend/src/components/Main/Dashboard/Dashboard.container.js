import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import { dispatchFetchUserPens } from './Dashboard.action'
import { userPensView } from './Dashboard.reducer'

const mapStateToProps = () => ({
  pens: userPensView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchUserPens,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
