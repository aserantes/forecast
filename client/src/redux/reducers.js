import { createReducer } from '@reduxjs/toolkit';
import { toggleDarkMode } from './actions';

const defaultState = {
  prefersDarkMode: false,
};

const uiReducer = createReducer(defaultState, {
  [toggleDarkMode]: (state) => {
    state.prefersDarkMode = !state.prefersDarkMode;
  },
});

export { uiReducer };
