import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import freeze from 'redux-freeze';
import { reducers } from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

let middlewares = [];

if (process.env.NODE_ENV !== 'production')
  middlewares.push(freeze);

let middleware = applyMiddleware(...middlewares, epicMiddleware);

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension)
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, middleware);

epicMiddleware.run(rootEpic);

export default store;