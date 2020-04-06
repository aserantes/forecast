import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { useDebouncedEffect } from '../hooks/useDebouncedEffect';
import { setInputValue } from '../redux/ui';
import { setCityNameToSearch, reset } from '../redux/cities';
import InputResults from './InputResults';
import PrevSearches from './PrevSearches';

function Input() {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.ui.inputValue);
  const matches = useSelector((state) => state.cities.matches);

  useEffect(() => {
    if (!inputValue && matches.length) {
      dispatch(reset());
    }
  }, [dispatch, inputValue, matches]);

  useDebouncedEffect(
    () => {
      if (inputValue.length > 2) {
        dispatch(setCityNameToSearch(inputValue));
      }
    },
    500,
    [inputValue]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setInputValue(value));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PrevSearches />
      </Grid>
      <Grid item xs={12}>
        <form noValidate autoComplete='off'>
          <TextField
            label='Enter city name...'
            id='outlined-margin-normal'
            variant='outlined'
            fullWidth
            onChange={handleChange}
          />
        </form>
      </Grid>
      <Grid item xs={12}>
        <InputResults />
      </Grid>
    </Grid>
  );
}

export default Input;
