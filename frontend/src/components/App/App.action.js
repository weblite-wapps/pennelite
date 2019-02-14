import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_DATA = 'SET_DATA'
export const setData = createAction(SET_DATA, (user, wisId) => ({
  user,
  wisId,
}))
export const dispatchSetData = (...args) => dispatch(setData(...args))
