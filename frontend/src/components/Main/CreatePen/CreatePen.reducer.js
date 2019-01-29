import * as R from 'ramda'

import { getState } from '../../../setup/redux'

// actions
import { CHANGE_PEN } from './CreatePen.action'

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
  writer: 'writeer',
  title: 'titleeeldkfdnldkf',
  isSaved: true,
}

// lens
const getlLens = type => R.lensProp(type)

// views
export const codesView = () => ({
  html: R.path(['CreatePen', 'html'])(getState()),
  css: R.path(['CreatePen', 'css'])(getState()),
  js: R.path(['CreatePen', 'js'])(getState()),
  writer: R.path(['CreatePen', 'writer'])(getState()),
  title: R.path(['CreatePen', 'title'])(getState()),
  isSaved: R.path(['CreatePen', 'isSaved'])(getState()),
})

const reducers = {
  [CHANGE_PEN]: (state, { value, type }) => ({
    ...state,
    [type]: value,
    isSaved: false,
  }),
  // console.log(html),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
