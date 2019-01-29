import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

export const FETCH_PEN = 'FETCH_PEN'
export const fetchPen = createAction(FETCH_PEN, (user, title) => ({
  user,
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
