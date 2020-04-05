import React from 'react';
import { connect } from 'react-redux';

import { Container, Grid, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Input from './Input';
import Forecast from './Forecast';

const App = (props) => {
  const { prefersDarkMode } = props;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container maxWidth="sm">
          <Box m={2}>
            <Grid container spacing={2}>
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
};

const mapStateToProps = ({ prefersDarkMode }) => ({
  prefersDarkMode,
});

export default connect(mapStateToProps)(App);
