import { createSlice } from '@reduxjs/toolkit';
import { getLocalState } from '../helpers';

const initialState = {
  prefersDarkMode: false,
  prefersCelcius: true,
  previousCities: [],
  ...getLocalState(),
  inputValue: ''
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
    },
    delPreviousCity: (state, action) => {
      const cityIndexToDelete = action.payload;
      state.previousCities.splice(cityIndexToDelete, 1);
    }
  }
});

const { actions, reducer } = uiSlice;

export const { toggleDarkMode, toggleCelcius, setInputValue, addPreviousCities, delPreviousCity } = actions;

export default reducer;
