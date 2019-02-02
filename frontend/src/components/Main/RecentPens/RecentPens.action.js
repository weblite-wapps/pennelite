// modules
import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

export const FETCH_RECENT_PENS = 'FETCH_RECENT_PENS'
export const fetchRecentPens = createAction(FETCH_RECENT_PENS)
export const dispatchFetchRecentPens = (...args) =>
  dispatch(fetchRecentPens(...args))

export const SET_RECENT_PENS = 'SET_RECENT_PENS'
export const setRecentPens = createAction(SET_RECENT_PENS, pens => ({
  pens,
}))
export const dispatchSetRecentPens = (...args) =>
  dispatch(setRecentPens(...args))
// console.log('... :', ...args)
