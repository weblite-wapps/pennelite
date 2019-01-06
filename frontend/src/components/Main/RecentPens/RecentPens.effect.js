import { combineEpics, ofType } from 'redux-observable'
import { tap, mergeMap, ignoreElements } from 'rxjs/operators'
import { FETCH_RECENT_PENS } from './RecentPens.action'
import {
  CHANGE_HTML_CODE,
  dispatchChangeHtmlCode,
} from '../CreatePen/CreatePen.action'
import { getRequests } from '../../../helper/functions/request.helper'

const effectFetchRecentPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_RECENT_PENS),
    mergeMap(
      () => getRequests('/'),
      // .then(res => console.log('res ', res))
      // .catch(() => console.log('cant get from server')),
      // TODO GET REQUEST SHOULD BE COMPLETED
    ),
    tap(console.log),
    // tap(({ body }) => console.log(body[0])),
    tap(({ body }) => dispatchChangeHtmlCode(body[0].html, 'html')),
    ignoreElements(),
  )

export default combineEpics(effectFetchRecentPensEpic)
