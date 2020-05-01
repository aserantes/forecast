import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { CircularProgress, Grid } from '@material-ui/core';
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
          return <Alert severity='info'>No forecast found for City with id &quot;{cityIdToSearch}&quot;.</Alert>;
        }
        return <Alert severity='error'>{response.message}</Alert>;
      }
      if (fetchState === 'pending') {
        return (
          <Grid container justify='center'>
            <CircularProgress disableShrink />
          </Grid>
        );
      }
    }
    return null;
  };

  return renderComponent();
}

export default ForecastResults;
