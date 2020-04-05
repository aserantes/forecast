import React from 'react';
import City from './City';

function CityList(props) {
  const { cities } = props;
  return cities.map((city) => <City key={city.id} city={city} />);
}

export default CityList;
