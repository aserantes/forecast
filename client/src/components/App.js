import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Input from './Input';
import Forecast from './Forecast';

function App() {
  const prefersDarkMode = useSelector((state) => state.ui.prefersDarkMode);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container maxWidth='sm'>
          <Box m={2}>
            <Grid container>
              <Grid item xs={12}>
                <Input />
              </Grid>
              <Grid item xs={12}>
                <Forecast />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
