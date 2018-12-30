import * as R from 'ramda'

import { getState } from '../../../setup/redux'

// actions
import CHANGE_HTML_CODE from './CreatePen.action'

// state
const initialState = {
  html: '',
}

// lens
const htmlLens = R.lensProp('html')

// views
export const htmlView = () => R.path(['App', 'html'])(getState())

const reducers = {
  [CHANGE_HTML_CODE]: (state, { html }) => R.set(htmlLens, html, state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
