import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Fade } from '@material-ui/core';
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
    <Fade in timeout={1000}>
      <List
        className='List'
        scrollToItem
        height={300}
        itemCount={cities.length}
        itemSize={36}
        itemData={{ cities, onCityClick }}
        overscanCount={4}
      >
        {Row}
      </List>
    </Fade>
  );
}

export default CityList;
