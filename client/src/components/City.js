import React from 'react';

function City(props) {
  const { city } = props;
  return <div>{city.name}</div>;
}

export default City;
