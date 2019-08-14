import { from, timer, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, map, debounce, filter, retryWhen, catchError } from 'rxjs/operators';

const api = {
  fetchUser: (value) => {
    const request = fetch('https://randomuser.me/apia/?results=5').then(response => response.json());
    return from(request);
  }
};

const retries = 3;

export const getSearch = (action$) => action$.pipe(
  ofType('CHANGE_SEARCH_VALUE'),
  filter(({ value }) => value.length),
  debounce(() => timer(500)),
  mergeMap(action => api.fetchUser(action.value).pipe(
      map(data => data.results),
      map(results => { return {type: 'USERS_RECEIVED', data: results} }),
      retryWhen( errors$ =>
        errors$.pipe(
          map(() => {
            retries -= 1;
            console.log(retries)
            if(retries === 0)
              throw new Error('error retrying')
          })
        )
      ),
      catchError(error => of({
        type: 'USERS_RECEIVED_ERROR'
      }))
    )
  )
);
