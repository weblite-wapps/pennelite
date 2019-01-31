import { connect } from 'react-redux'
import App from './App'
import { dispatchSetUser } from './App.action'

const mapDispatchToProps = () => ({
  setUser: dispatchSetUser,
})

const mapStateToProps = () => ({})

export default connect(
  mapDispatchToProps,
  mapStateToProps,
)(App)
