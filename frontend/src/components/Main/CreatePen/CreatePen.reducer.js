import * as R from 'ramda'

import { getState } from '../../../setup/redux'

// actions
import { CHANGE_HTML_CODE } from './CreatePen.action'

const defaultHtml = `<html>
  <body>
    <div id="root"></div>
  </body>
</html>`
// state
const initialState = {
  html: defaultHtml,
  css: '',
  js: '',
}

// lens
const getlLens = type => R.lensProp(type)

// views
export const codesView = () => ({
  html: R.path(['CreatePen', 'html'])(getState()),
  css: R.path(['CreatePen', 'css'])(getState()),
  js: R.path(['CreatePen', 'js'])(getState()),
})

const reducers = {
  [CHANGE_HTML_CODE]: (state, { value, type }) =>
    R.set(getlLens(type), value, state),
  // console.log(html),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
