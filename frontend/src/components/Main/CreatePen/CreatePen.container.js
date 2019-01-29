import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import {
  dispatchChangePen,
  dispatchSavePen,
  dispatchFetchPen,
} from './CreatePen.action'
import { codesView } from './CreatePen.reducer'

const mapDispatchTpProps = () => ({
  fetchPen: dispatchFetchPen,
  changePen: dispatchChangePen,
  savePen: dispatchSavePen,
  codes: codesView(),
})

const mapStateToprops = () => ({})

export default connect(mapDispatchTpProps)(CreatePen)
