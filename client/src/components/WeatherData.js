import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, makeStyles, Box, SvgIcon } from '@material-ui/core';
import { getTime, k2c, k2f, getTempLevel } from '../helpers';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // fontFamily: 'monospace',
    fontSize: '12px'
  },
  cluster: {
    display: 'flex',
    flexGrow: '1',
    flexBasis: '256px'
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    flexBasis: '128px'
  },
  pair: {
    display: 'flex',
    flexDirection: 'row'
  },
  key: {
    padding: '2px',
    display: 'flex',
    fontWeight: 'bold',
    flexGrow: '1',
    flexBasis: '64px',
    justifyContent: 'flex-end',
    whiteSpace: 'nowrap'
  },
  value: {
    padding: '2px',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '64px',
    whiteSpace: 'nowrap'
  },
  specialGroup: {
    display: 'flex',
    flexGrow: '1',
    flexBasis: '128px',
    justifyContent: 'center'
  },
  temp: {
    display: 'flex',
    fontSize: '38px',
    fontWeight: 'bold',
    alignItems: 'center',
    lineHeight: '32px'
  },
  icon: {
    display: 'flex',
    height: 'unset',
    width: '32px'
  }
});

function WeatherData({ data }) {
  const classes = useStyles();
  const { temp, temp_min: minTemp, temp_max: maxTemp, sunrise, sunset, pressure, humidity } = data;
  const prefersCelcius = useSelector((state) => state.ui.prefersCelcius);

  const formattedTemp = prefersCelcius ? k2c(temp) : k2f(temp);
  const formattedMinTemp = prefersCelcius ? k2c(minTemp) : k2f(minTemp);
  const formattedMaxTemp = prefersCelcius ? k2c(maxTemp) : k2f(maxTemp);
  const formattedSunrise = getTime(sunrise);
  const formattedSunset = getTime(sunset);
  const { color: tempLevelColor, path: tempLevelIconPath } = getTempLevel(temp);
  return (
    <Grid className={classes.container}>
      <Grid className={classes.cluster}>
        <Grid className={classes.specialGroup}>
          <SvgIcon className={classes.icon} viewBox='0 0 32 32'>
            <path d={tempLevelIconPath} />
          </SvgIcon>
          <Box classes={{ root: classes.temp }} component='span' color={tempLevelColor}>
            {formattedTemp}
          </Box>
        </Grid>
        <Grid className={classes.group}>
          <Grid className={classes.pair}>
            <Grid className={classes.key}>{`Maximum: `}</Grid>
            <Grid className={classes.value}>{formattedMaxTemp}</Grid>
          </Grid>
          <Grid className={classes.pair}>
            <Grid className={classes.key}>{`Minimum: `}</Grid>
            <Grid className={classes.value}>{formattedMinTemp}</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.cluster}>
        <Grid className={classes.group}>
          <Grid className={classes.pair}>
            <Grid className={classes.key}>{`Pressure: `}</Grid>
            <Grid className={classes.value}>{`${pressure} hPa`}</Grid>
          </Grid>
          <Grid className={classes.pair}>
            <Grid className={classes.key}>{`Humidity: `}</Grid>
            <Grid className={classes.value}>{`${humidity} %`}</Grid>
          </Grid>
        </Grid>
        <Grid className={classes.group}>
          <Grid className={classes.pair}>
            <Grid className={classes.key}>{`Sunrise: `}</Grid>
            <Grid className={classes.value}>{formattedSunrise}</Grid>
          </Grid>
          <Grid className={classes.pair}>
            <Grid className={classes.key}>{`Sunset: `}</Grid>
            <Grid className={classes.value}>{formattedSunset}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WeatherData;
