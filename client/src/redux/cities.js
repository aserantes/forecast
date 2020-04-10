import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/cities';

const initialState = {
  pending: false,
  matches: [],
  error: null,
  cityNameToSearch: ''
};

export const fetchCities = createAsyncThunk('cities/fetchCities', (q) =>
  API.get('/', { params: { q } })
    .then((ok) => ok.data)
    .catch((err) => err)
);

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    citiesReset: () => initialState,
    setCityNameToSearch: (state, action) => {
      state.cityNameToSearch = action.payload;
    }
  },
  extraReducers: {
    [fetchCities.fulfilled]: (state, action) => {
      state.matches = action.payload;
      state.pending = false;
    },
    [fetchCities.rejected]: (state, action) => {
      state.error = action.payload;
      state.pending = false;
    },
    [fetchCities.pending]: (state) => {
      state.pending = true;
    }
  }
});

const { actions, reducer } = citiesSlice;

export const { citiesReset, setCityNameToSearch } = actions;

export default reducer;
