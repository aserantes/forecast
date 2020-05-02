import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Grid, Typography } from '@material-ui/core';
import { getTime, k2c, k2f } from '../helpers';

function WeatherData({ data }) {
  const { temp, pressure, humidity, temp_min: minTemp, temp_max: maxTemp, sunrise, sunset } = data;
  const prefersCelcius = useSelector((state) => state.ui.prefersCelcius);
  const convertedTemp = prefersCelcius ? k2c(temp) : k2f(temp);
  const convertedMinTemp = prefersCelcius ? k2c(minTemp) : k2f(minTemp);
  const convertedMaxTemp = prefersCelcius ? k2c(maxTemp) : k2f(maxTemp);

  return (
    <Grid container>
      <Typography component='span'>{convertedTemp}&nbsp;</Typography>
      <Box flexGrow={1}>
        <Box display='flex'>
          <Typography component='span'>Max:&nbsp;</Typography>
          <Typography component='span'> {convertedMaxTemp}</Typography>
        </Box>
        <Grid item>
          <Typography component='span'>Min:&nbsp;</Typography>
          <Typography component='span'> {convertedMinTemp}</Typography>
        </Grid>
      </Box>
      <Box flexGrow={1} display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row'>
          <Box fontWeight='fontWeightBold'>pressure:&nbsp;</Box>
          <Box>{pressure}</Box>
        </Box>
        <Box display='flex' flexDirection='row'>
          <Box fontWeight='fontWeightBold'>humidity:&nbsp;</Box>
          <Box>{humidity}%</Box>
        </Box>
      </Box>
      <Box flexGrow={1} display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row'>
          <Box fontWeight='fontWeightBold'>dawn:&nbsp;</Box>
          <Box>{getTime(sunrise)}</Box>
        </Box>
        <Box display='flex' flexDirection='row'>
          <Box fontWeight='fontWeightBold'>dusk:&nbsp;</Box>
          <Box>{getTime(sunset)}</Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default WeatherData;
