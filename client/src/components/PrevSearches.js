import React from 'react';
import { useSelector } from 'react-redux';
import DarkModeToggler from './DarkModeToggler';
import CelciusToggler from './CelciusToggler';

function PrevSearches() {
  const previousCities = useSelector((state) => state.ui.previousCities);
  const renderPrevCities = () => {
    return (
      <div>
        <DarkModeToggler />
        <CelciusToggler />
        {previousCities.map((prevCity) => (
          <div key={prevCity.id}>{prevCity.name}</div>
        ))}
      </div>
    );
  };
  return renderPrevCities();
}

export default PrevSearches;
