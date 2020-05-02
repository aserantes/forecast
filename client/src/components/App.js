import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, Box, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
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
        <Container maxWidth='sm' disableGutters>
          <Box m={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MainMenu />
              </Grid>
              <Grid item xs={12}>
                <Input />
              </Grid>
              <Grid item xs={12}>
                <InputResults />
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
