import React from 'react';

function Forecast(props) {
  const { forecast } = props;

  return <div>{forecast.coord.lon}</div>;
}

export default Forecast;
