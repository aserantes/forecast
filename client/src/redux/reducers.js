import { toggleDarkMode } from './actions';

const defaultState = {
  prefersDarkMode: false,
};

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case toggleDarkMode.type:
      return { ...state, prefersDarkMode: !state.prefersDarkMode };
    default:
      return state;
  }
};

export { uiReducer };
