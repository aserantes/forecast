import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { CircularProgress, Grid, Grow, Fade } from '@material-ui/core';
import { fetchForecast } from '../../redux';
import CityInfo from './CityInfo';

function WeatherSection() {
  const dispatch = useDispatch();

  const response = useSelector((state) => state.forecast.response);
  const cityToSearch = useSelector((state) => state.forecast.cityToSearch);
  const fetchState = useSelector((state) => state.forecast.fetchState);
  const cityNameToSearch = useSelector((state) => state.cities.cityNameToSearch);

  useEffect(() => {
    if (cityToSearch.id) {
      dispatch(fetchForecast({ ...cityToSearch }));
    }
  }, [cityToSearch, cityToSearch.id, dispatch]);

  const renderComponent = () => {
    if (fetchState !== 'idle' && !cityNameToSearch) {
      if (fetchState === 'fulfilled') {
        if (!response.message) {
          if (response.extraData) {
            return <CityInfo response={response} />;
          }
          return (
            <Fade in timeout={1000}>
              <Alert severity='info'>No forecast found.</Alert>
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

export default WeatherSection;
