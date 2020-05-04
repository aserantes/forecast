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
  Fade,
  Collapse
} from '@material-ui/core';
import WeatherData from './WeatherData';
import { getLocalDateTime } from '../helpers';

const useStyles = makeStyles({
  cardHeaderContent: {
    minWidth: '0'
  },
  cardHeaderTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '0',
    fontSize: '15px;'
  },
  cardHeaderSubheader: {
    whiteSpace: 'nowrap',
    minWidth: '0',
    fontSize: '13px;'
  },
  weatherAvatar: {
    backgroundColor: colors.grey[400],
    width: '40px',
    height: '40px'
  },
  flagAvatar: {
    width: '40px',
    height: '40px'
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
});

function Forecast(props) {
  const classes = useStyles();
  const { forecast } = props;
  const { main, name: cityName, weather, coord, sys, timezone: timezoneOffset, extraData } = forecast;
  const { name: country, flag, region, subregion, timezones } = extraData;
  const timeZone = timezones[0];
  const { sunrise, sunset } = sys;
  const data = { ...main, sunrise, sunset, flag, region, subregion };
  const { main: weatherMain, description: weatherDesc, icon: Weather } = weather[0];
  const { lon, lat } = coord;

  const [showMap, setShowMap] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const googleMapStaticUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const publicApiKey = 'AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70';
  const mapUrl = `${googleMapStaticUrl}?center=${lat},${lon}&zoom=10&scale=1&size=568x568&maptype=hybrid&key=${publicApiKey}`;

  return (
    <Fade in timeout={1000}>
      <Card>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <CardHeader
              classes={{
                content: classes.cardHeaderContent,
                title: classes.cardHeaderTitle,
                subheader: classes.cardHeaderSubheader
              }}
              avatar={
                <Fade in={showFlag} timeout={1000}>
                  <Avatar
                    alt={`country flag of ${cityName}`}
                    src={flag}
                    classes={{ root: classes.flagAvatar }}
                    onLoad={() => setShowFlag(true)}
                  />
                </Fade>
              }
              title={`Weather in ${cityName}`}
              subheader={`${country}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardHeader
              classes={{
                content: classes.cardHeaderContent,
                title: classes.cardHeaderTitle,
                subheader: classes.cardHeaderSubheader
              }}
              avatar={
                <Fade in={showWeather} timeout={1000}>
                  <Avatar
                    alt={weatherDesc}
                    src={`http://openweathermap.org/img/wn/${Weather}@2x.png`}
                    classes={{ root: classes.weatherAvatar }}
                    onLoad={() => setShowWeather(true)}
                  />
                </Fade>
              }
              title={`${weatherMain} (${weatherDesc})`}
              subheader={`${getLocalDateTime(timezoneOffset)} ${timeZone}`}
            />
          </Grid>
        </Grid>
        <Divider light variant='middle' />
        <CardContent>
          <WeatherData data={data} />
        </CardContent>
        <Collapse in={showMap} timeout={1000}>
          <CardMedia component='img' src={mapUrl} onLoad={() => setShowMap(true)} />
        </Collapse>
      </Card>
    </Fade>
  );
}

export default Forecast;
