import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/ipLocation';

const initialState = {
  fetchState: null,
  response: null
};

export const fetchIpLocation = createAsyncThunk('cities/fetchIpLocation', () =>
  API.get('/')
    .then((res) => res.data)
    .catch((err) => err)
);

const ipLocationSlice = createSlice({
  name: 'ipLocation',
  initialState,
  reducers: {
    ipLocationReset: () => initialState
  },
  extraReducers: {
    [fetchIpLocation.fulfilled]: (state, action) => {
      state.response = action.payload;
      state.fetchState = 'fulfilled';
    },
    [fetchIpLocation.pending]: (state) => {
      state.fetchState = 'pending';
    }
  }
});

const { actions, reducer } = ipLocationSlice;

export const { ipLocationReset } = actions;

export default reducer;
