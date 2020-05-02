import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  makeStyles,
  Divider,
  Grid,
  colors,
  Grow,
  Fade,
  Collapse
} from '@material-ui/core';
import WeatherData from './WeatherData';
import { getLocalDateTime } from '../helpers';

const useStyles = makeStyles((theme) => ({
  cardHeaderContent: {
    minWidth: '0'
  },
  cardHeaderTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '0'
  },
  avatar: {
    backgroundColor: colors.grey[400],
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  img: {
    width: '48px',
    height: '48px'
  }
}));

function Forecast(props) {
  const classes = useStyles();
  const { forecast } = props;
  const { main, name: cityName, weather, coord, sys, timezone: timeZone } = forecast;
  const { sunrise, sunset, country } = sys;
  const data = { ...main, sunrise, sunset };
  const { main: weatherMain, description: weatherDesc, icon: Weather } = weather[0];
  const { lon, lat } = coord;

  const [showMap, setShowMap] = useState(false);
  const handleShowMap = () => {
    setShowMap(true);
  };

  const [showFlag, setShowFlag] = useState(false);
  const handleShowFlag = () => {
    setShowFlag(true);
  };

  const [showWeather, setShowWeather] = useState(false);
  const handleShowWeather = () => {
    setShowWeather(true);
  };

  const googleMapStaticUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const publicApiKey = 'AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70';
  const mapUrl = `${googleMapStaticUrl}?center=${lat},${lon}&zoom=10&scale=1&size=568x568&maptype=hybrid&key=${publicApiKey}`;

  return (
    <Fade in>
      <Card>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <CardHeader
              classes={{ content: classes.cardHeaderContent, title: classes.cardHeaderTitle }}
              avatar={
                <Grow in={showFlag}>
                  <Avatar
                    alt={`country flag of ${cityName}`}
                    src={`https://www.countryflags.io/${country}/flat/48.png`}
                    classes={{ root: classes.avatar, img: classes.img }}
                    onLoad={handleShowFlag}
                  />
                </Grow>
              }
              title={`Weather in ${cityName}`}
              subheader={`${country}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardHeader
              avatar={
                <Grow in={showWeather}>
                  <Avatar
                    alt={weatherDesc}
                    src={`http://openweathermap.org/img/wn/${Weather}@2x.png`}
                    classes={{ root: classes.avatar }}
                    onLoad={handleShowWeather}
                  />
                </Grow>
              }
              title={`${weatherMain} (${weatherDesc})`}
              subheader={`${getLocalDateTime(timeZone)}`}
            />
          </Grid>
        </Grid>

        <Divider light variant='middle' />
        <CardContent>
          <WeatherData data={data} />
        </CardContent>
        <Collapse in={showMap} timeout='auto'>
          <CardMedia component='img' src={mapUrl} onLoad={handleShowMap} />
        </Collapse>
      </Card>
    </Fade>
  );
}

export default Forecast;
