import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

export const CHANGE_HTML_CODE = 'CHANGE_HTML_CODE'
export const changeHtmlCode = createAction(CHANGE_HTML_CODE, (value, type) => ({
  value,
  type,
}))
export const dispatchChangeHtmlCode = (...args) =>
  dispatch(changeHtmlCode(...args))

export const SAVE_PEN = 'SAVE_PEN'
export const savePen = createAction(SAVE_PEN)
export const dispatchSavePen = (...args) => dispatch(savePen(...args))
