import { configureStore } from '@reduxjs/toolkit';
import { setLocalState } from '../helpers';

import ui from './ui';
import cities from './cities';
import forecast from './forecast';

export const store = configureStore({
  reducer: { ui, cities, forecast }
});

store.subscribe(() => {
  setLocalState(store.getState().ui);
});

export { fetchCities, citiesReset, setCityNameToSearch } from './cities';
export { fetchForecast, forecastReset, setCityIdToSearch } from './forecast';
export { toggleDarkMode, toggleCelcius, setInputValue, addPreviousCities, delPreviousCity } from './ui';
