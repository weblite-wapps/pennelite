import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_DATA = 'SET_DATA'
export const setData = createAction(SET_DATA, (user, wisId) => ({
  user,
  wisId,
}))
export const dispatchSetData = (...args) => dispatch(setData(...args))

export const SET_PAGE = 'SET_PAGE'
export const setPage = createAction(SET_PAGE)
export const dispatchSetPage = (...args) => dispatch(setPage(...args))
