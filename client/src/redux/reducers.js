import { combineReducers } from 'redux';
import * as types from './types';

const defaultState = {
  prefersDarkMode: false,
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_DARK_MODE:
      return { ...state, prefersDarkMode: !state.prefersDarkMode };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ ui: uiReducer });

export { rootReducer };
