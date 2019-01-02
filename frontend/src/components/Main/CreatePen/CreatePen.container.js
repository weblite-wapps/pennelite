import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import { dispatchChangeHtmlCode, dispatchSavePen } from './CreatePen.action'
import { codesView } from './CreatePen.reducer'

const mapDispatchTpProps = () => ({
  changeHtmlCode: dispatchChangeHtmlCode,
  savePen: dispatchSavePen,
  codes: codesView(),
})

export default connect(mapDispatchTpProps)(CreatePen)
