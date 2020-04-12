import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { useDebouncedCallback } from 'use-debounce';
// state
import { setCityNameToSearch } from '../redux/cities';
import { setInputValue } from '../redux/ui';
// components
import InputResults from './InputResults';
import PrevSearches from './PrevSearches';

function Input() {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.ui.inputValue);
  const fetchState = useSelector((state) => state.cities.fetchState);

  const [debouncedCallback] = useDebouncedCallback((value) => {
    if (inputValue.length > 1) dispatch(setCityNameToSearch(value));
  }, 1000);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setInputValue(value));
    debouncedCallback(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PrevSearches />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Enter city name'
          id='outlined-margin-normal'
          variant='outlined'
          fullWidth
          onChange={handleChange}
          value={inputValue}
          disabled={fetchState === 'pending'}
          autoComplete='off'
        />
      </Grid>
      <Grid item xs={12}>
        <InputResults />
      </Grid>
    </Grid>
  );
}

export default Input;
