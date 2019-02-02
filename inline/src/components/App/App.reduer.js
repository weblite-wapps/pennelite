// modules
import * as R from 'ramda'
// local modules
import { getState } from '../../setup/redux'
import { SET_PEN } from './App.action'

// state
const initialState = {
  pen: {},
}

// views
export const penView = () => R.path(['App', 'pen'])(getState())

// reducers
const reducers = {
  [SET_PEN]: (state, { pen }) => ({
    ...state,
    pen,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
