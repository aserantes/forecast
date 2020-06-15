import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/forecast';

const initialState = {
  fetchState: null,
  response: null,
  cityToSearch: {
    id: null,
    name: null,
    lon: null,
    lat: null,
    country: null
  }
};

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', (params) => {
  return API.get('/', { params: { ...params } })
    .then((res) => res.data)
    .catch((err) => err);
});

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    forecastReset: () => initialState,
    setCityToSearch: (state, action) => {
      state.cityToSearch = action.payload;
    }
  },
  extraReducers: {
    [fetchForecast.fulfilled]: (state, action) => {
      state.response = action.payload;
      state.fetchState = 'fulfilled';
    },
    [fetchForecast.pending]: (state) => {
      state.fetchState = 'pending';
    }
  }
});

const { actions, reducer } = forecastSlice;

export const { forecastReset, setCityToSearch } = actions;

export default reducer;
