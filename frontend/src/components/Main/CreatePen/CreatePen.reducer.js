import * as R from 'ramda'

import { getState } from '../../../setup/redux'

// actions
import {
  CHANGE_PEN,
  SET_USER_AND_TITLE,
  CHANGE_MENU_MODE,
  CLOSE_MENU,
  CHANGE_PREVIEW_MODE,
  CHANGE_PEN_VIEW_MODE,
  CHANGE_TAB_INDEX,
  SET_USER_CURRENT_PEN,
  RESET_STATE,
  SET_ISSAVED_TO_TRUE,
} from './CreatePen.action'
// import { userView } from '../App/App.reducer'

const defaultHtml = `<html>
  <body>
    <div id="root"></div>
  </body>
</html>`
// state
const initialState = {
  html: defaultHtml,
  css: '',
  js: '',
  writer: '',
  title: '',
  isSaved: 'true',
  menuIsOpen: false,
  previewIsShown: true,
  viewMode: 'simple',
  tabIndex: 0,
}

// lens
// const htmlLens = R.lensProp('html')
// const cssLens = R.lensProp('css')
// const jsLens = R.lensProp('js')
const writerLens = R.lensProp('writer')
// const titleLens = R.lensProp('title')
const isSavedLens = R.lensProp('isSaved')
const menuIsOpenLens = R.lensProp('menuIsOpen')
const previousIsShownLens = R.lensProp('previousIsShown')
const viewModeLens = R.lensProp('viewMode')
const tabIndexLens = R.lensProp('tabIndex')

// views
export const codesView = () => ({
  html: R.path(['CreatePen', 'html'])(getState()),
  css: R.path(['CreatePen', 'css'])(getState()),
  js: R.path(['CreatePen', 'js'])(getState()),
  writer: R.path(['CreatePen', 'writer'])(getState()),
  title: R.path(['CreatePen', 'title'])(getState()),
})

export const htmlView = () => R.path(['CreatePen', 'html'])(getState())
export const cssView = () => R.path(['CreatePen', 'css'])(getState())
export const jsView = () => R.path(['CreatePen', 'js'])(getState())
export const writerView = () => R.path(['CreatePen', 'writer'])(getState())
export const titleView = () => R.path(['CreatePen', 'title'])(getState())
export const isSavedView = () => R.path(['CreatePen', 'isSaved'])(getState())
export const menuView = () => R.path(['CreatePen', 'menuIsOpen'])(getState())
export const previewView = () =>
  R.path(['CreatePen', 'previewIsShown'])(getState())
export const viewModeView = () => R.path(['CreatePen', 'viewMode'])(getState())
export const tabIndexView = () => R.path(['CreatePen', 'tabIndex'])(getState())

const reducers = {
  [SET_USER_AND_TITLE]: (state, { user, title }) => ({
    ...state,
    writer: user,
    title,
  }),

  [CHANGE_PEN]: (state, { value, type }) => ({
    ...state,
    [type]: value,
    isSaved: 'false',
  }),

  [CLOSE_MENU]: state => R.set(menuIsOpenLens, false, state),

  [CHANGE_MENU_MODE]: state => R.set(menuIsOpenLens, !state.menuIsOpen, state),

  [CHANGE_PREVIEW_MODE]: state =>
    R.set(previousIsShownLens, !state.previewIsShown, state),

  [CHANGE_PEN_VIEW_MODE]: state =>
    R.set(
      viewModeLens,
      state.viewMode === 'simple' ? 'tabular' : 'simple',
      state,
    ),

  [CHANGE_TAB_INDEX]: (state, { value }) => R.set(tabIndexLens, value, state),

  [SET_USER_CURRENT_PEN]: (state, { user }) => R.set(writerLens, user, state),

  [RESET_STATE]: () => initialState,

  [SET_ISSAVED_TO_TRUE]: state => R.set(isSavedLens, true, state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
