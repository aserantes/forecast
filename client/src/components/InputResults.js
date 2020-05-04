import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { CircularProgress, Grid, Grow, Fade } from '@material-ui/core';
import { citiesReset, fetchCities, setInputValue, addPreviousCities, setCityIdToSearch } from '../redux';
import CityList from './CityList';

function InputResults() {
  const dispatch = useDispatch();

  const handleCityClick = (id, name) => {
    dispatch(setInputValue(name));
    dispatch(addPreviousCities({ id, name }));
    dispatch(citiesReset());
    dispatch(setCityIdToSearch(id));
  };

  const response = useSelector((state) => state.cities.response);
  const cityNameToSearch = useSelector((state) => state.cities.cityNameToSearch);
  const fetchState = useSelector((state) => state.cities.fetchState);

  useEffect(() => {
    if (cityNameToSearch) {
      dispatch(fetchCities(cityNameToSearch));
    }
  }, [cityNameToSearch, dispatch]);

  const renderComponent = () => {
    if (fetchState !== 'idle') {
      if (fetchState === 'fulfilled') {
        if (!response.name) {
          if (response.length) {
            return <CityList cities={response} onCityClick={handleCityClick} />;
          }
          return (
            <Fade in timeout={1000}>
              <Alert severity='info'>No cities found using &quot;{cityNameToSearch}&quot;.</Alert>
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

export default InputResults;
