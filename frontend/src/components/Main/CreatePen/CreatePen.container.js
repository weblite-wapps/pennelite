import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import { dispatchChangeHtmlCode } from './CreatePen.action'

import { codesView } from './CreatePen.reducer'

const mapDispatchTpProps = () => ({
  changeHtmlCode: dispatchChangeHtmlCode,
  codes: codesView(),
})

export default connect(mapDispatchTpProps)(CreatePen)
