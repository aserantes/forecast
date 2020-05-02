import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  makeStyles,
  Divider,
  Typography,
  colors
} from '@material-ui/core';
import WeatherData from './WeatherData';
import { getLocalDateTime } from '../helpers';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: colors.grey[400],
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '14px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    padding: theme.spacing(2),
    paddingBottom: 0
  }
}));

function Forecast(props) {
  const classes = useStyles();
  const { forecast } = props;
  const { main, name: cityName, weather, coord, sys, timezone: timeZone } = forecast;
  const { sunrise, sunset, country } = sys;
  const data = { ...main, sunrise, sunset };
  const { main: weatherMain, description: weatherDesc, icon: weatherIcon } = weather[0];
  const { lon, lat } = coord;

  const googleMapStaticUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const publicApiKey = 'AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70';
  const mapUrl = `${googleMapStaticUrl}?center=${lat},${lon}&zoom=10&scale=1&size=520x300&maptype=hybrid&key=${publicApiKey}`;

  return (
    <Card>
      <Typography className={classes.title}>{`Weather in ${cityName} (${country})`}</Typography>
      <CardHeader
        avatar={
          <Avatar
            alt={weatherDesc}
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            className={classes.avatar}
          />
        }
        title={`${weatherMain} (${weatherDesc})`}
        subheader={`${getLocalDateTime(timeZone)}`}
      />

      <Divider light variant='middle' />
      <CardContent>
        <WeatherData data={data} />
      </CardContent>
      <CardMedia component='img' src={mapUrl} />
    </Card>
  );
}

export default Forecast;
