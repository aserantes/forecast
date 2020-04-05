import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const toggleDarkMode = createAction('TOGGLE_DARK_MODE');

const uiDefaultState = {
  prefersDarkMode: false,
};

const uiReducer = createReducer(uiDefaultState, {
  [toggleDarkMode]: (state) => {
    state.prefersDarkMode = !state.prefersDarkMode;
  },
});

const store = configureStore({
  reducer: { ui: uiReducer },
});

export { toggleDarkMode, store };
