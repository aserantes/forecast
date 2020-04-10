import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/forecast';

const initialState = {
  pending: false,
  forecast: null,
  error: null,
  cityIdToSearch: null
};

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', (id) =>
  API.get('/', { params: { id } })
    .then((ok) => ok.data)
    .catch((err) => err)
);

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    forecastReset: () => initialState,
    setCityIdToSearch: (state, action) => {
      state.cityIdToSearch = action.payload;
    }
  },
  extraReducers: {
    [fetchForecast.fulfilled]: (state, action) => {
      state.forecast = action.payload;
      state.pending = false;
    },
    [fetchForecast.rejected]: (state, action) => {
      state.error = action.payload;
      state.pending = false;
    },
    [fetchForecast.pending]: (state) => {
      state.pending = true;
    }
  }
});

const { actions, reducer } = forecastSlice;

export const { forecastReset, setCityIdToSearch } = actions;

export default reducer;
