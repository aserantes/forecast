import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }
}));

function Forecast({ forecast }) {
  const classes = useStyles();
  const { main, name: cityName, weather, coord } = forecast;
  const { main: weatherMain, description: weatherDesc, icon: weatherIcon } = weather[0];
  const { temp, pressure, humidity, temp_min: minTemp, temp_max: maxTemp } = main;
  const { lon, lat } = coord;

  const googleMapStaticUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const publicApiKey = 'AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70';
  const mapUrl = `${googleMapStaticUrl}?center=${lat},${lon}&zoom=10&scale=1&size=400x200&maptype=hybrid&key=${publicApiKey}`;

  const today = new Date(Date.now()).toLocaleString().split(',')[0];
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
        title={`Forecast for ${cityName} - ${today}`}
        subheader={`${weatherMain} (${weatherDesc})`}
      />
      <CardMedia component='img' src={mapUrl} />
    </Card>
  );
}

export default Forecast;
