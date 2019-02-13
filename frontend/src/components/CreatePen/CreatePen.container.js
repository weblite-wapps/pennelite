import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import {
  dispatchChangePen,
  dispatchSavePen,
  dispatchFetchPen,
  dispatchChangeMenuMode,
  dispatchCloseMenu,
  dispatchChangePreviewMode,
  dispatchChangePenViewMode,
  dispatchChangeTabIndex,
  dispatchSetWriterCurrentPen,
  dispatchResetState,
} from './CreatePen.action'
import {
  htmlView,
  cssView,
  jsView,
  writerView,
  titleView,
  menuView,
  previewView,
  viewModeView,
  tabIndexView,
  isSavedView,
} from './CreatePen.reducer'
import { appUserView } from '../App/App.reducer'

const mapDispatchTpProps = () => ({
  fetchPen: dispatchFetchPen,
  changePen: dispatchChangePen,
  savePen: dispatchSavePen,
  changeMenu: dispatchChangeMenuMode,
  closeMenu: dispatchCloseMenu,
  changePreviewMode: dispatchChangePreviewMode,
  changeViewMode: dispatchChangePenViewMode,
  changeTab: dispatchChangeTabIndex,
  setWriter: dispatchSetWriterCurrentPen,
  clearState: dispatchResetState,
})

const mapStateToprops = () => ({
  htmlContent: htmlView(),
  cssContent: cssView(),
  jsContent: jsView(),
  writerName: writerView(),
  title: titleView(),
  isSaved: isSavedView(),
  isMenuOpen: menuView(),
  previewIsOpen: previewView(),
  viewMode: viewModeView(),
  tabIndex: tabIndexView(),
  appUser: appUserView(),
})

export default connect(
  mapStateToprops,
  mapDispatchTpProps,
)(CreatePen)
