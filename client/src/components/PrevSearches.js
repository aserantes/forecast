import React from 'react';
import { useSelector } from 'react-redux';
import DarkModeToggler from './DarkModeToggler';

function PrevSearches() {
  const previousCities = useSelector((state) => state.ui.previousCities);
  const renderPrevCities = () => {
    return (
      <div>
        <DarkModeToggler />
        {previousCities.map((prevCity) => (
          <div key={prevCity.id}>{prevCity.name}</div>
        ))}
      </div>
    );
  };
  return renderPrevCities();
}

export default PrevSearches;
