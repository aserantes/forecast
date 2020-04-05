import { createStore } from 'redux';
import { uiReducer } from './reducers';

const store = createStore(
  uiReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
