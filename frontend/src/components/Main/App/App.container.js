import { connect } from 'react-redux'
import App from './App'
import { dispatchSetUser } from './App.action'

const mapDispatchToProps = () => ({
  setUser: dispatchSetUser,
})

export default connect(mapDispatchToProps)(App)
