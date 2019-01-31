import * as R from 'ramda'
import { getState } from '../../../setup/redux'
import { SET_USER } from './App.action'

const initialState = {
  user: '',
}

export const userView = () => ({
  user: R.path(['App', 'user'])(getState()),
})

const reducer = {
  [SET_USER]: (state, { user }) => ({
    ...state,
    user,
  }),
  // console.log('user in reducer :', user),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
