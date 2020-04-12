import React from 'react';
import { useSelector } from 'react-redux';

function PrevSearches() {
  const previousCities = useSelector((state) => state.ui.previousCities);
  const renderPrevCities = () => {
    return previousCities.map((prevCity) => <div key={prevCity.id}>{prevCity.name}</div>);
  };
  return renderPrevCities();
}

export default PrevSearches;
