import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(promiseMiddleware()));
  return store;
}
