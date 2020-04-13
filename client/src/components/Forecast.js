import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  avatar: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }
}));

function Forecast({ forecast }) {
  const classes = useStyles();
  const { main, name: cityName, weather } = forecast;
  const { main: weatherMain, description: weatherDesc, icon: weatherIcon } = weather[0];
  const { temp, pressure, humidity, temp_min: minTemp, temp_max: maxTemp } = main;
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
      <CardMedia />
      <CardContent />
    </Card>
  );
}

export default Forecast;
