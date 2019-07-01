import { connect } from 'react-redux'
import App from './App'
import {
  dispatchSetData,
  dispatchChangeMenuMode,
  dispatchCloseMenu,
} from './App.action'
import { pageView, anchorElView, menuView } from './App.reducer'
import {
  dispatchChangePreviewMode,
  dispatchSavePen,
  dispatchChangePenViewMode,
} from '../CreatePen/CreatePen.action'

const mapDispatchToProps = () => ({
  setData: dispatchSetData,
  openMenu: dispatchChangeMenuMode,
  closeMenu: dispatchCloseMenu,
  savePen: dispatchSavePen,
  changePreviewMode: dispatchChangePreviewMode,
  changeViewMode: dispatchChangePenViewMode,
})
const mapStateToProps = () => ({
  page: pageView(),
  anchorEl: anchorElView(),
  isMenuOpen: menuView(),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
