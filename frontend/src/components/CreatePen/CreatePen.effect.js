// import rxjs from 'rxjs'
import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import {
  ignoreElements,
  tap,
  pluck,
  mergeMap,
  map,
  filter,
} from 'rxjs/operators'
import {
  dispatchChangePen,
  SAVE_PEN,
  FETCH_PEN,
  dispatchSetIsSavedToTrue,
} from './CreatePen.action'
import { codesView } from './CreatePen.reducer'

import {
  postRequests,
  getRequests,
} from '../../helper/functions/request.helper'

const effectSavePenEpic = action$ =>
  action$.pipe(
    ofType(SAVE_PEN),
    tap(console.log),
    tap(() =>
      postRequests('/updateCurrentPen')
        .send(codesView())
        // .then(res => console.log('res: ', res))
        .catch(() => console.log("couldn't update")),
    ),
    tap(dispatchSetIsSavedToTrue),
    ignoreElements(),
  )

const effectFetchPenEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PEN),
    pluck('payload'),
    mergeMap(({ writer, title }) =>
      getRequests('/fetchSinglePen').query({ writer, title }),
    ),
    filter(R.prop('body')),
    map(R.prop('body')),
    tap(R.forEachObjIndexed(dispatchChangePen)),
    ignoreElements(),
  )

export default combineEpics(effectSavePenEpic, effectFetchPenEpic)
