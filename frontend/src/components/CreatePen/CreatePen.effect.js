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
  RUN_CLICK,
  dispatchSetIframe,
  dispatchSetRunningMode,
  dispatchSetCurrentPenId,
} from './CreatePen.action'
import { codesView } from './CreatePen.reducer'

import {
  postRequests,
  getRequests,
} from '../../helper/functions/request.helper'

const effectSavePenEpic = action$ =>
  action$.pipe(
    ofType(SAVE_PEN),
    tap(() =>
      postRequests('/updateCurrentPen')
        .send(codesView())
        .then(res => dispatchSetCurrentPenId(R.path(['body', '_id'], res)))
        .catch(() => console.log("couldn't update")),
    ),
    tap(dispatchSetIsSavedToTrue),
    ignoreElements(),
  )

const effectRunPenEpic = action$ =>
  action$.pipe(
    ofType(RUN_CLICK),
    tap(dispatchSetIframe),
    tap(dispatchSetRunningMode),
    ignoreElements(),
  )

// const effectFetchPenEpic = action$ =>
//   action$.pipe(
//     ofType(FETCH_PEN),
//     pluck('payload'),
//     filter(pluck('_id')),
//     mergeMap(({ _id }) => getRequests('/fetchSinglePen').query({ _id })),
//     // filter(R.prop('body')),
//     map(R.prop('body')),
//     tap(R.forEachObjIndexed(dispatchChangePen)),
//     ignoreElements(),
//   )

export default combineEpics(
  effectSavePenEpic,
  effectRunPenEpic,
  // effectFetchPenEpic,
)
