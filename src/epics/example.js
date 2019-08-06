import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const api = {
  fetchUser: () => {
    const request = fetch('https://randomuser.me/api/').then(response => response.json());
    return from(request);
  }
};

export const getUserEpic = action$ => action$.pipe(
  ofType('GET_USERS'),
  mergeMap(action =>
    api.fetchUser(action.payload).pipe(
      map(data => ({ type: 'USERS_RECEIVED', data: data.results[0] }))
      )
  )
);