import { connect } from 'react-redux'

import Iframe from './Iframe'
import { dispatchSetRunningMode } from '../../CreatePen.action'

const mapDispatchToProps = () => ({
  runMode: dispatchSetRunningMode,
})

export default connect(mapDispatchToProps)(Iframe)
