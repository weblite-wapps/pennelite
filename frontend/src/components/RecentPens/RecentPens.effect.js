import { ofType, combineEpics } from 'redux-observable'
import { mergeMap, pluck, map, ignoreElements, tap } from 'rxjs/operators'
import { FETCH_RECENT_PENS, setRecentPens, LIKE_PEN } from './RecentPens.action'
import { getRequests } from '../../helper/functions/request.helper'

const effectFetchRecentPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_RECENT_PENS),
    mergeMap(() => getRequests('/').catch(console.log)),
    pluck('body'),
    map(setRecentPens),
  )

const effectLikePen = action$ =>
  action$.pipe(
    ofType(LIKE_PEN),
    pluck('payload'),
    // tap(console.log),
    mergeMap(query =>
      getRequests('/likePen')
        .query(query)
        .then(res => console.log('res :', res.text))
        .catch(console.log),
    ),
    ignoreElements(),
  )

export default combineEpics(effectFetchRecentPensEpic, effectLikePen)
