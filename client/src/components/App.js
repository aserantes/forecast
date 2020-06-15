import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, Box, createMuiTheme, ThemeProvider, CssBaseline, Fade } from '@material-ui/core';
import 'typeface-roboto';

import CityInput from './CityInput/CityInput';
import CityInputResults from './CityInput/CityInputResults';
import WeatherSection from './WeatherSection/WeatherSection';
import MainMenu from './MainMenu/MainMenu';

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
        <Fade in timeout={1000}>
          <Container maxWidth='sm' disableGutters>
            <Box m={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <MainMenu />
                </Grid>
                <Grid item xs={12}>
                  <CityInput />
                </Grid>
                <Grid item xs={12}>
                  <CityInputResults />
                  <WeatherSection />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Fade>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
