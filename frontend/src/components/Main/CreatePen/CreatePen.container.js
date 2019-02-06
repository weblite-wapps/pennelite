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
  dispatchSetUserCurrentPen,
  dispatchResetState,
} from './CreatePen.action'
import {
  // codesView,
  htmlView,
  cssView,
  jsView,
  writerView,
  titleView,
  menuView,
  previewView,
  viewModeView,
  tabIndexView,
  // htmlView,
  isSavedView,
} from './CreatePen.reducer'
import { userView } from '../App/App.reducer'

const mapDispatchTpProps = () => ({
  fetchPen: dispatchFetchPen,
  changePen: dispatchChangePen,
  savePen: dispatchSavePen,
  changeMenu: dispatchChangeMenuMode,
  closeMenu: dispatchCloseMenu,
  changePreviewMode: dispatchChangePreviewMode,
  changeViewMode: dispatchChangePenViewMode,
  changeTab: dispatchChangeTabIndex,
  setUser: dispatchSetUserCurrentPen,
  clearState: dispatchResetState,
})

const mapStateToprops = () => ({
  // codes: codesView(),
  htmlContent: htmlView(),
  cssContent: cssView(),
  jsContent: jsView(),
  writerName: writerView(),
  title: titleView(),
  isSaved: isSavedView(),
  menuIsOpen: menuView(),
  previewIsOpen: previewView(),
  viewMode: viewModeView(),
  tabIndex: tabIndexView(),
  user: userView(),
})

export default connect(
  mapStateToprops,
  mapDispatchTpProps,
)(CreatePen)
