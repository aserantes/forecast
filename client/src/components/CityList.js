import React from 'react';
import { FixedSizeList as List } from 'react-window';
import City from './City';

function Row(props) {
  const { index, style, data } = props;
  const { cities, onCityClick } = data;
  const cityItem = cities[index];
  return (
    <div style={style} key={index}>
      <City city={cityItem} onCityClick={onCityClick} />
    </div>
  );
}

function CityList(props) {
  const { cities, onCityClick } = props;

  return (
    <List className='List' height={300} itemCount={cities.length} itemSize={40} itemData={{ cities, onCityClick }}>
      {Row}
    </List>
  );
}

export default CityList;
