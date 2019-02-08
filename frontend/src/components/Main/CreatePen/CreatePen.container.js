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
  appUser: appUserView(),
})

export default connect(
  mapStateToprops,
  mapDispatchTpProps,
)(CreatePen)
