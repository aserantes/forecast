import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { useDebouncedEffect } from '../hooks/useDebouncedEffect';
import { setInputValue } from '../redux/ui';
import { setCityNameToSearch, reset } from '../redux/cities';
import InputResults from './InputResults';
import PrevSearches from './PrevSearches';

function Input(props) {
  const { setInputValue, setCityNameToSearch, reset, matches, inputValue } = props;

  useEffect(() => {
    if (!inputValue && matches.length) {
      reset();
    }
  }, [inputValue, matches, reset]);

  useDebouncedEffect(
    () => {
      if (inputValue.length > 2) {
        setCityNameToSearch(inputValue);
      }
    },
    500,
    [inputValue]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
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

const mapStateToProps = ({ ui, cities }) => ({
  inputValue: ui.inputValue,
  matches: cities.matches,
  pending: cities.pending
});

const mapDispatchToProps = {
  setInputValue,
  setCityNameToSearch,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
