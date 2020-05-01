import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Avatar, makeStyles, Divider } from '@material-ui/core';
import WeatherData from './WeatherData';
import { getDate } from '../helpers';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }
}));

function Forecast(props) {
  const classes = useStyles();
  const { forecast } = props;
  const { main, name: cityName, weather, coord, sys } = forecast;
  const { sunrise, sunset, country } = sys;
  const data = { ...main, sunrise, sunset };
  const { main: weatherMain, description: weatherDesc, icon: weatherIcon } = weather[0];
  const { lon, lat } = coord;

  const googleMapStaticUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const publicApiKey = 'AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70';
  const mapUrl = `${googleMapStaticUrl}?center=${lat},${lon}&zoom=10&scale=1&size=520x200&maptype=hybrid&key=${publicApiKey}`;

  const today = getDate(Date.now());
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt={weatherDesc}
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            className={classes.avatar}
          />
        }
        title={`Weather in ${cityName} (${country}) • ${today}`}
        subheader={`${weatherMain} (${weatherDesc})`}
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
