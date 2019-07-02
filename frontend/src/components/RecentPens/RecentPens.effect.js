import { ofType, combineEpics } from 'redux-observable'
import {
  mergeMap,
  pluck,
  map,
  ignoreElements,
  tap,
  filter,
} from 'rxjs/operators'
import { FETCH_RECENT_PENS, setRecentPens, LIKE_PEN } from './RecentPens.action'
import { getRequests } from '../../helper/functions/request.helper'
import { SET_CLICKEDPEN_ID } from '../CreatePen/CreatePen.action'
import { navigate } from '@reach/router'
import push from '../../setup/root'
import { dispatchSetPage } from '../App/App.action'

const effectFetchRecentPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_RECENT_PENS),
    mergeMap(() => getRequests('/').catch(console.log)),
    filter(pens => R.prop('body', pens)),
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

const effectPenButtonsClick = action$ =>
  action$.pipe(
    ofType(SET_CLICKEDPEN_ID),
    tap(() => console.log('go to CreatePen')),
    // tap(() => console.log('history ', history)),
    // tap(() => push('CreatePen')),
    tap(() => dispatchSetPage('CreatePen')),
    // tap(() => navigate('/CreatePen')),
    ignoreElements(),
  )

export default combineEpics(
  effectFetchRecentPensEpic,
  effectLikePen,
  effectPenButtonsClick,
)
