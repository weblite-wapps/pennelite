import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import {
  dispatchChangePen,
  dispatchFetchPen,
  dispatchChangeMenuMode,
  dispatchCloseMenu,
  dispatchChangePreviewMode,
  dispatchChangePenViewMode,
  dispatchChangeTabIndex,
  dispatchSetWriterCurrentPen,
  dispatchResetState,
  dispatchsetTitleEditMode,
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
  titleEditModeView,
} from './CreatePen.reducer'
import { appUserView } from '../App/App.reducer'

const mapDispatchTpProps = () => ({
  fetchPen: dispatchFetchPen,
  changePen: dispatchChangePen,
  changeMenu: dispatchChangeMenuMode,
  closeMenu: dispatchCloseMenu,
  changePreviewMode: dispatchChangePreviewMode,
  changeViewMode: dispatchChangePenViewMode,
  changeTab: dispatchChangeTabIndex,
  setWriter: dispatchSetWriterCurrentPen,
  clearState: dispatchResetState,
  titleModeChange: dispatchsetTitleEditMode,
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
  editableTitle: titleEditModeView(),
})

export default connect(
  mapStateToprops,
  mapDispatchTpProps,
)(CreatePen)
