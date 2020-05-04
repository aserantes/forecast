import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/forecast';

const initialState = {
  fetchState: null,
  response: null,
  cityIdToSearch: null
};

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', (id) =>
  API.get('/', { params: { id } })
    .then((res) => res.data)
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
      state.response = action.payload;
      state.fetchState = 'fulfilled';
    },
    [fetchForecast.pending]: (state) => {
      state.fetchState = 'pending';
    }
  }
});

const { actions, reducer } = forecastSlice;

export const { forecastReset, setCityIdToSearch } = actions;

export default reducer;
