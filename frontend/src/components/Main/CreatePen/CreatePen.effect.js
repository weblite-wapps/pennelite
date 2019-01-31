// import rxjs from 'rxjs'
import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { ignoreElements, tap, pluck, mergeMap, map } from 'rxjs/operators'
import { dispatchChangePen, SAVE_PEN, FETCH_PEN } from './CreatePen.action'
import { codesView } from './CreatePen.reducer'

import {
  postRequests,
  getRequests,
} from '../../../helper/functions/request.helper'

const effectSavePenEpic = action$ =>
  action$.pipe(
    ofType(SAVE_PEN),
    tap(() =>
      postRequests('/updateCurrentPen')
        .send(codesView())
        .then(res => console.log('res: ', res))
        .catch(() => console.log("couldn't update")),
    ),
    ignoreElements(),
  )

const effectFetchPenEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PEN),
    pluck('payload'),
    mergeMap(({ user, title }) =>
      getRequests('/fetchSinglePen')
        .query({ user, title })
        .catch(() => console.log('couldnt fetch')),
    ),
    map(R.prop('body')),
    map(R.head),
    tap(R.forEachObjIndexed(dispatchChangePen)),
    ignoreElements(),
  )
// res => console.log('res :', res.body[0].html)

export default combineEpics(effectSavePenEpic, effectFetchPenEpic)
