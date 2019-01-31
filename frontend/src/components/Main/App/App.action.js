import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

export const SET_USER = 'SET_USER'
export const setUser = createAction(SET_USER, user => ({ user }))
export const dispatchSetUser = (...args) => dispatch(setUser(...args))
