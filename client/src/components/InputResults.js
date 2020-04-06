import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/cities';
import CityList from './CityList';

function InputResults() {
  const dispatch = useDispatch();

  const matches = useSelector((state) => state.cities.matches);
  const cityNameToSearch = useSelector((state) => state.cities.cityNameToSearch);

  useEffect(() => {
    if (cityNameToSearch) {
      dispatch(fetchCities(cityNameToSearch));
    }
  }, [cityNameToSearch, dispatch]);

  return matches && <CityList cities={matches} />;
}

export default InputResults;
