import { combineEpics } from 'redux-observable';
import { getUserEpic } from './example';

const rootEpic = combineEpics(
  getUserEpic
);

export default rootEpic;