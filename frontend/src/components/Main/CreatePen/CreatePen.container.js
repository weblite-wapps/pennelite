import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import dispatchChangeHtmlCode from './CreatePen.action'

const mapDispatchTpProps = () => ({
  changeHtmlCode: dispatchChangeHtmlCode,
})

export default connect(mapDispatchTpProps)(CreatePen)
