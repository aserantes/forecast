import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { useDebouncedEffect } from '../hooks/useDebouncedEffect';
import { usePrevious } from '../hooks/usePrevious';
// state
import { setCityNameToSearch, citiesReset } from '../redux/cities';
import { setCityIdToSearch } from '../redux/forecast';
import { setInputValue } from '../redux/ui';
// components
import InputResults from './InputResults';
import PrevSearches from './PrevSearches';

function Input() {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.ui.inputValue);
  const cityIdToSearch = useSelector((state) => state.forecast.cityIdToSearch);

  useEffect(() => {
    if (!inputValue) {
      dispatch(setCityIdToSearch(''));
      dispatch(citiesReset());
    }
  }, [dispatch, inputValue]);

  const prev = usePrevious(inputValue);
  useDebouncedEffect(
    () => {
      if (inputValue.length > 2 && prev !== inputValue && !cityIdToSearch) {
        dispatch(setCityNameToSearch(inputValue));
      }
    },
    1000,
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
        <form noValidate autoComplete='off' onSubmit={(e) => e.preventDefault()}>
          <TextField
            label='Enter city name'
            id='outlined-margin-normal'
            variant='outlined'
            fullWidth
            onChange={handleChange}
            value={inputValue}
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
