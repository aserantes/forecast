import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../redux/forecast';

import DarkModeToggler from './DarkModeToggler';

function Forecast() {
  const dispatch = useDispatch();
  const forecast = useSelector((state) => state.forecast.forecast);
  const cityIdToSearch = useSelector((state) => state.forecast.cityIdToSearch);

  useEffect(() => {
    if (cityIdToSearch) {
      dispatch(fetchForecast(cityIdToSearch));
    }
  }, [cityIdToSearch, dispatch]);

  return (
    <div>
      <div>{JSON.stringify(forecast)}</div>
      <DarkModeToggler />
    </div>
  );
}

export default Forecast;
