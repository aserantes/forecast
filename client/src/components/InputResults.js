import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { CircularProgress, Grid } from '@material-ui/core';

import { citiesReset, fetchCities } from '../redux/cities';
import { setInputValue, addPreviousCities } from '../redux/ui';
import { setCityIdToSearch } from '../redux/forecast';
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
  const inputValue = useSelector((state) => state.ui.inputValue);

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
          return <Alert severity='info'>No cities found using &quot;{inputValue}&quot;.</Alert>;
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

export default InputResults;
