import { connect } from 'react-redux'
import App from './App'
import { dispatchSetData } from './App.action'

const mapDispatchToProps = () => ({
  setData: dispatchSetData,
})

export default connect(mapDispatchToProps)(App)
