import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import initialState from './initialState.json';

const logger = (store) => (next) => (action) => {
  console.log('previous state', store.getState());
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const Store = createStore(
  rootReducer,
  initialState || {},
  applyMiddleware(logger, thunk),
);

export default Store;
