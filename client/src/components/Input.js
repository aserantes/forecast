import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import InputResults from './InputResults';
import PrevSearches from './PrevSearches';

function Input() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PrevSearches></PrevSearches>
      </Grid>
      <Grid item xs={12}>
        <form noValidate autoComplete="off">
          <TextField
            label="Enter city name..."
            id="outlined-margin-normal"
            variant="outlined"
            fullWidth
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
