import { configureStore } from '@reduxjs/toolkit';
import ui from './ui';
import cities from './cities';
import forecast from './forecast';

export const store = configureStore({
  reducer: { ui, cities, forecast },
});
