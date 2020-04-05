import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './reducers';

const store = configureStore({
  reducer: { ui: uiReducer },
});

export { store };
