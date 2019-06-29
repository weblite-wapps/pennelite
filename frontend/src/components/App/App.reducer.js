import * as R from 'ramda'
import { getState } from '../../setup/redux'
import { SET_DATA, SET_PAGE } from './App.action'

const initialState = {
  user: '',
  wisId: '',
  page: 'CreatePen',
}

export const appUserView = () => R.path(['App', 'user'])(getState())
export const pageView = () => R.path(['App', 'page'])(getState())

const reducer = {
  [SET_DATA]: (state, { user, wisId }) => ({
    ...state,
    user,
    wisId,
  }),
  [SET_PAGE]: (state, page) => ({
    ...state,
    page,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
