import * as R from 'ramda'
import { getState } from '../../../setup/redux'

import { SET_USER_PENS } from './Dashboard.action'

const initialState = {
  userPens: [],
}

export const userPensView = () => R.path(['Dashboard', 'userPens'])(getState())

const reducers = {
  [SET_USER_PENS]: (state, { pens }) => ({
    userPens: pens,
  }),
  // console.log('pens :', pens[0]),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
