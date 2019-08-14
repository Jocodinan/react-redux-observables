import { combineEpics } from 'redux-observable';
import { getUserEpic } from './example';
import { getSearch } from './search'

const rootEpic = combineEpics(
  getUserEpic,
  getSearch
);

export default rootEpic;