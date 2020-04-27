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
      const newCity = action.payload;
      const cityAlreadyExists = state.previousCities.findIndex((prevCity) => prevCity.id === newCity.id) !== -1;
      if (!cityAlreadyExists) {
        state.previousCities.unshift(action.payload);
        if (state.previousCities.length > 5) state.previousCities.pop();
      }
    }
  }
});

const { actions, reducer } = uiSlice;

export const { toggleDarkMode, toggleCelcius, setInputValue, addPreviousCities } = actions;

export default reducer;
