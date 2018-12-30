import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

export const CHANGE_HTML_CODE = 'CHANGE_HTML_CODE'
export const changeHtmlCode = createAction(CHANGE_HTML_CODE, value => ({
  value,
}))
export const dispatchChangeHtmlCode = (...args) =>
  dispatch(changeHtmlCode(...args))