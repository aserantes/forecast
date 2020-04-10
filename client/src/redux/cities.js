import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/cities';

const initialState = {
  fetchState: null,
  response: null,
  cityNameToSearch: null
};

export const fetchCities = createAsyncThunk('cities/fetchCities', (q) =>
  API.get('/', { params: { q } })
    .then((res) => res.data)
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
      state.response = action.payload;
      state.fetchState = 'fulfilled';
    },
    [fetchCities.pending]: (state) => {
      state.fetchState = 'pending';
    }
  }
});

const { actions, reducer } = citiesSlice;

export const { citiesReset, setCityNameToSearch } = actions;

export default reducer;
