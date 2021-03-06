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
  Fade,
  Collapse
} from '@material-ui/core';
import { getLocalizedNow } from '../../helpers';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '0',
    fontSize: '12px;'
  },
  weatherAvatar: {
    backgroundColor: 'rgba(127,127,127,1)',
    width: '40px',
    height: '40px'
  },
  flagAvatar: {
    width: '40px',
    height: '40px'
  },
  worldMapAvatar: {
    margin: '8px',
    width: '100px',
    height: '100px',
    position: 'absolute',
    boxShadow: '0px 0px 4px rgba(127,127,127,0.5)'
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  withBoxShadow: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  }
});

function CityInfo(props) {
  const classes = useStyles();
  const { response } = props;
  const { extraData, forecast } = response;
  const { name: country, cityName, flag, region, subregion, lat, lon, timezoneOffset, tz } = extraData;
  const { sunrise, weather, sunset, pressure, temp: mainTemp, humidity } = forecast[0];
  const { min: minTemp, max: maxTemp } = mainTemp;
  const data = { minTemp, maxTemp, sunrise, sunset, timezoneOffset, tz, flag, region, subregion, pressure, humidity };
  const { main: weatherMain, description: weatherDesc, icon: Weather } = weather[0];
  const localizedNow = getLocalizedNow(tz);

  const [showCityMap, setShowCityMap] = useState(false);
  const [showWorldMap, setShowWorldMap] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const googleMapStaticUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const publicApiKey = 'AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70';
  const cityMapUrl = `${googleMapStaticUrl}?zoom=10&scale=1&size=568x568&maptype=hybrid&markers=size:mid%7Ccolor:red%7C${lat},${lon}&key=${publicApiKey}`;
  const worldMapUrl = `${googleMapStaticUrl}?zoom=1&scale=1&size=100x100&maptype=terrain&markers=size:tiny%7Ccolor:red%7C${lat},${lon}&key=${publicApiKey}`;
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
                    className={classes.withBoxShadow}
                  />
                </Fade>
              }
              title={`${cityName}`}
              subheader={country}
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
                    className={classes.withBoxShadow}
                  />
                </Fade>
              }
              title={`${weatherMain} (${weatherDesc})`}
              subheader={localizedNow}
            />
          </Grid>
        </Grid>
        <Divider light variant='middle' />
        <CardContent>
          <CurrentWeather data={data} />
        </CardContent>
        <Divider light variant='middle' />
        <CardContent>
          <Forecast forecast={forecast} tz={tz} />
        </CardContent>
        <Collapse in={showCityMap} timeout={1000} onEntered={() => setShowWorldMap(true)}>
          <Fade in={showWorldMap} timeout={1000}>
            <Avatar
              alt='world map'
              src={worldMapUrl}
              classes={{ root: classes.worldMapAvatar }}
              className={classes.withBoxShadow}
            />
          </Fade>
          <CardMedia component='img' src={cityMapUrl} onLoad={() => setShowCityMap(true)} />
        </Collapse>
      </Card>
    </Fade>
  );
}

export default CityInfo;
