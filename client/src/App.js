import React from 'react';
import { Box, TextField, Grid } from '@material-ui/core';

function App() {
  return (
    <Box m={2}>
      <Grid container direction="column" alignItems="stretch" spacing={2}>
        <Grid item>
          <form noValidate autoComplete="off">
            <TextField
              label="Enter city name..."
              id="outlined-margin-normal"
              variant="outlined"
              fullWidth
            />
          </form>
        </Grid>
        <Grid item>Partial Results</Grid>
      </Grid>
    </Box>
  );
}

export default App;
