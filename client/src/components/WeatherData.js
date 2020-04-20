import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';
import { k2c, k2f } from '../helpers/tempConverter';

function WeatherData({ data }) {
  const { temp, pressure, humidity, temp_min: minTemp, temp_max: maxTemp } = data;
  const prefersCelcius = useSelector((state) => state.ui.prefersCelcius);
  const convertedTemp = prefersCelcius ? k2c(temp) : k2f(temp);
  const convertedMinTemp = prefersCelcius ? k2c(minTemp) : k2f(minTemp);
  const convertedMaxTemp = prefersCelcius ? k2c(maxTemp) : k2f(maxTemp);

  return (
    <Box display='flex' fontFamily='Monospace'>
      <Box fontSize='24px'>{convertedTemp}&nbsp;</Box>
      <Box flexGrow={1}>
        <Box display='flex'>
          <Box color='primary.light'>HI:&nbsp;</Box>
          {convertedMaxTemp}
        </Box>
        <Box display='flex'>
          <Box color='secondary.light'>LO:&nbsp;</Box>
          {convertedMinTemp}
        </Box>
      </Box>
      <Box flexGrow={1}>
        <Box>pressure: {pressure} hector pascuales</Box>
        <Box>humidity: {humidity} lalala</Box>
      </Box>
    </Box>
  );
}

export default WeatherData;