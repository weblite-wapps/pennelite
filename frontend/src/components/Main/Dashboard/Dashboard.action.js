import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

export const FETCH_USER_PENS = 'FETCH_USER_PENS'
export const fetchUserPens = createAction(FETCH_USER_PENS, user => ({ user }))
export const dispatchFetchUserPens = (...args) =>
  dispatch(fetchUserPens(...args))
// console.log('args :', args)
// console.log('

export const SET_USER_PENS = 'SET_USER_PENS'
export const setUserPens = createAction(SET_USER_PENS, pens => ({ pens }))
export const dispatchSetUserPens = (...args) => dispatch(setUserPens(...args))
