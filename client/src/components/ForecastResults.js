import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { CircularProgress, Grid, Grow, Fade } from '@material-ui/core';
import { fetchForecast } from '../redux';
import Forecast from './Forecast';

function ForecastResults() {
  const dispatch = useDispatch();

  const response = useSelector((state) => state.forecast.response);
  const cityIdToSearch = useSelector((state) => state.forecast.cityIdToSearch);
  const fetchState = useSelector((state) => state.forecast.fetchState);
  const cityNameToSearch = useSelector((state) => state.cities.cityNameToSearch);

  useEffect(() => {
    if (cityIdToSearch) {
      dispatch(fetchForecast(cityIdToSearch));
    }
  }, [cityIdToSearch, dispatch]);

  const renderComponent = () => {
    if (fetchState !== 'idle' && !cityNameToSearch) {
      if (fetchState === 'fulfilled') {
        if (response.cod === 200) {
          if (response.coord) {
            return <Forecast forecast={response} />;
          }
          return (
            <Fade in timeout={10000}>
              <Alert severity='info'>No forecast found for City with id &quot;{cityIdToSearch}&quot;.</Alert>
            </Fade>
          );
        }
        return (
          <Fade in timeout={1000}>
            <Alert severity='error'>{response.message}</Alert>
          </Fade>
        );
      }
      if (fetchState === 'pending') {
        return (
          <Grow in timeout={1000}>
            <Grid container justify='center'>
              <CircularProgress />
            </Grid>
          </Grow>
        );
      }
    }
    return null;
  };

  return renderComponent();
}

export default ForecastResults;
