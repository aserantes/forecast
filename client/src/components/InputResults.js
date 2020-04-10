import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { CircularProgress, Grid } from '@material-ui/core';

import { citiesReset, fetchCities } from '../redux/cities';
import { setInputValue } from '../redux/ui';
import { setCityIdToSearch } from '../redux/forecast';
import CityList from './CityList';

function InputResults() {
  const dispatch = useDispatch();

  const handleCityClick = (id, name) => {
    dispatch(setInputValue(name));
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

  const results = fetchState === 'fulfilled' && !response.name && response.length;
  const noResults = fetchState === 'fulfilled' && !response.name && !response.length;
  const error = fetchState === 'fulfilled' && response.name;
  const pending = fetchState === 'pending';
  const idle = fetchState === 'idle';

  return !idle
    ? (results && <CityList cities={response} onCityClick={handleCityClick} />) ||
        (noResults && <Alert severity='info'>No cities found using &quot;{inputValue}&quot;.</Alert>) ||
        (error && <Alert severity='error'>{response.message}</Alert>) ||
        (pending && (
          <Grid container justify='center'>
            <CircularProgress disableShrink />
          </Grid>
        ))
    : null;
}

export default InputResults;
