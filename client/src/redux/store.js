import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  ui: {
    prefersDarkMode: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState.ui,
  reducers: {
    toggleDarkMode: (state) => {
      state.prefersDarkMode = !state.prefersDarkMode;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;

export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});
