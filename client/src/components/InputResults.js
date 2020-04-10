import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const matches = useSelector((state) => state.cities.matches);
  const cityNameToSearch = useSelector((state) => state.cities.cityNameToSearch);

  useEffect(() => {
    if (cityNameToSearch) {
      dispatch(fetchCities(cityNameToSearch));
    }
  }, [cityNameToSearch, dispatch]);

  return matches && <CityList cities={matches} onCityClick={handleCityClick} />;
}

export default InputResults;
