import * as R from 'ramda'
import { ofType, combineEpics } from 'redux-observable'
import { ignoreElements, tap, map, mergeMap } from 'rxjs/operators'
import { FETCH_WRITER_PENS, dispatchSetWriterPens } from './Dashboard.action'
import { getRequests } from '../../../helper/functions/request.helper'

const effectFetchUserPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_WRITER_PENS),
    map(R.prop('payload')),
    mergeMap(writer =>
      getRequests('/fetchWriterPens')
        .query(writer)
        .then(Promise.resolve('Dummy response to keep the console quiet'))
        .catch(console.log("couldm't find user pens :")),
    ),
    map(R.prop('body')),
    tap(dispatchSetWriterPens),
    ignoreElements(),
  )

export default combineEpics(effectFetchUserPensEpic)
