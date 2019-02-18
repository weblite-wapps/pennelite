import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_WRITER_AND_TITLE = 'SET_WRITER_AND_TITLE'
export const setWriterAndTitle = createAction(
  SET_WRITER_AND_TITLE,
  ({ writer, title }) => ({
    writer,
    title,
  }),
)
export const dispatchSetWriterAndTitle = (...args) =>
  dispatch(setWriterAndTitle(...args))

export const FETCH_PEN = 'FETCH_PEN'
export const fetchPen = createAction(FETCH_PEN, (writer, title) => ({
  writer,
  title,
}))
export const dispatchFetchPen = (...args) => dispatch(fetchPen(...args))
// console.log(...args)

export const CHANGE_PEN = 'CHANGE_PEN'
export const changePen = createAction(CHANGE_PEN, (value, type) => ({
  value,
  type,
}))

export const dispatchChangePen = (...args) => dispatch(changePen(...args))
// console.log('args :', ...args)

export const SAVE_PEN = 'SAVE_PEN'
export const savePen = createAction(SAVE_PEN)
export const dispatchSavePen = () => dispatch(savePen())

export const CHANGE_MENU_MODE = 'CHANGE_MENU_MODE'
export const changeMenuMode = createAction(CHANGE_MENU_MODE)
export const dispatchChangeMenuMode = () => dispatch(changeMenuMode())

export const CLOSE_MENU = 'CLOSE_MENU'
export const closeMenu = createAction(CLOSE_MENU)
export const dispatchCloseMenu = () => dispatch(closeMenu())

export const CHANGE_PREVIEW_MODE = 'CHANGE_PREVIEW_MODE'
export const changePreviewMode = createAction(CHANGE_PREVIEW_MODE)
export const dispatchChangePreviewMode = () => dispatch(changePreviewMode())

export const CHANGE_PEN_VIEW_MODE = 'CHANGE_PEN_VIEW_MODE'
export const changePenViewMode = createAction(CHANGE_PEN_VIEW_MODE)
export const dispatchChangePenViewMode = () => dispatch(changePenViewMode())

export const CHANGE_TAB_INDEX = 'CHANGE_TAB_INDEX'
export const changeTabIndex = createAction(CHANGE_TAB_INDEX, value => ({
  value,
}))
export const dispatchChangeTabIndex = (...args) =>
  dispatch(changeTabIndex(...args))

export const SET_WRITER_CURRENT_PEN = 'SET_WRITER_CURRENT_PEN'
export const setWriterCurrentPen = createAction(
  SET_WRITER_CURRENT_PEN,
  writer => ({
    writer,
  }),
)
export const dispatchSetWriterCurrentPen = (...args) =>
  dispatch(setWriterCurrentPen(...args))

export const RESET_STATE = 'RESET_STATE'
export const resetState = createAction(RESET_STATE)
export const dispatchResetState = () => dispatch(resetState())

export const SET_ISSAVED_TO_TRUE = 'SET_ISSAVED_TO_TRUE'
export const setIsSavedToTrue = createAction(SET_ISSAVED_TO_TRUE)
export const dispatchSetIsSavedToTrue = () => dispatch(setIsSavedToTrue())

export const SET_TITLE_EDIT_MODE = 'SET_TITLE_EDIT_MODE'
export const setTitleEditMode = createAction(SET_TITLE_EDIT_MODE)
export const dispatchsetTitleEditMode = () => dispatch(setTitleEditMode())

export const SET_RUNNING_MODE = 'SET_RUNNING_MODE'
export const setRunningMode = createAction(SET_RUNNING_MODE)
export const dispatchSetRunningMode = () => dispatch(setRunningMode())
