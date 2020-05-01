import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Input from './Input';
import ForecastResults from './ForecastResults';
import InputResults from './InputResults';
import MainMenu from './MainMenu';

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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MainMenu />
              </Grid>
              <Grid item xs={12}>
                <Input />
                <InputResults />
              </Grid>
              <Grid item xs={12}>
                <ForecastResults />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
