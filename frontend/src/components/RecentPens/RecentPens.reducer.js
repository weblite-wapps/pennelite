// modules
import * as R from 'ramda'
// local modules
import { getState } from '../../setup/redux'
import { SET_RECENT_PENS } from './RecentPens.action'

// state
const initialState = {
  recentPens: [],
}

// lens
const recentPensLens = R.lensProp('recentPens')

// views
export const pensView = () => R.path(['RecentPens', 'recentPens'])(getState())

// reducers
const reducers = {
  [SET_RECENT_PENS]: (state, { pens }) => R.set(recentPensLens, pens, state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
