import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const FETCH_PEN = 'FETCH_PEN'
export const fetchPen = createAction(FETCH_PEN, ({ user, title }) => ({
  user,
  title,
}))
export const dispatchFetchPen = (...args) => dispatch(fetchPen(...args))

export const SET_PEN = 'SET_PEN'
export const setPen = createAction(SET_PEN, pen => ({ pen }))
export const dispatchSetPen = (...args) => dispatch(setPen(...args))
