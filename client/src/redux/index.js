import { configureStore } from '@reduxjs/toolkit';
import { setLocalState } from '../helpers';

import ui from './ui';
import cities from './cities';
import forecast from './forecast';
import ipLocation from './ipLocation';

export const store = configureStore({
  reducer: { ui, cities, forecast, ipLocation }
});

store.subscribe(() => {
  setLocalState(store.getState().ui);
});

export { fetchIpLocation, ipLocationReset } from './ipLocation';
export { fetchCities, citiesReset, setCityNameToSearch } from './cities';
export { fetchForecast, forecastReset, setCityToSearch } from './forecast';
export { toggleDarkMode, toggleCelcius, setInputValue, addPreviousCities, delPreviousCity } from './ui';
