import { connect } from 'react-redux'

import Menu from './Menu'

import { dispatchSavePen } from '../../CreatePen.action'

const mapDispatchTpProps = () => ({
  savePen: dispatchSavePen,
})

export default connect(mapDispatchTpProps)(Menu)
