import { connect } from 'react-redux'
import App from './App'
import { dispatchSetData } from './App.action'
import { pageView } from './App.reducer'

const mapDispatchToProps = () => ({
  setData: dispatchSetData,
})
const mapStateToProps = () => ({
  page: pageView(),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
