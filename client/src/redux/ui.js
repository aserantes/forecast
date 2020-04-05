import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prefersDarkMode: false,
  inputValue: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.prefersDarkMode = !state.prefersDarkMode;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    extraReducers: {},
  },
});

const { actions, reducer } = uiSlice;

export const { toggleDarkMode, setInputValue } = actions;

export default reducer;
