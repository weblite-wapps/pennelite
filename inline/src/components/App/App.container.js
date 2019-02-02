// modules
import { connect } from 'react-redux'
// components
import App from './App'
// views
import { penView } from './App.reduer'

// actions
import { dispatchFetchPen } from './App.action'

const mapStateToProps = () => ({
  pen: penView(),
})

const mapDispatchToProps = () => ({
  fetchPen: dispatchFetchPen,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
