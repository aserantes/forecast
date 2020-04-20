import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prefersDarkMode: false,
  prefersCelcius: true,
  inputValue: '',
  previousCities: []
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.prefersDarkMode = !state.prefersDarkMode;
    },
    toggleCelcius: (state) => {
      state.prefersCelcius = !state.prefersCelcius;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addPreviousCities: (state, action) => {
      state.previousCities.push(action.payload);
      if (state.previousCities.length > 5) state.previousCities.shift();
    }
  }
});

const { actions, reducer } = uiSlice;

export const { toggleDarkMode, toggleCelcius, setInputValue, addPreviousCities } = actions;

export default reducer;
