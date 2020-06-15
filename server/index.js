if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const express = require('express');
const axios = require('axios');
const path = require('path');
const cities = require('./cities.json');
const countries = require('./countries.json');

const app = express();

// create a .env file at root of project to store environment variables like API KEY, URL and PORT. (See .env.example for syntax)
const { PORT } = process.env;

const API = 'http://api.openweathermap.org/data/2.5';
const appid = process.env.API_KEY;

// This endpoint handles city search by name.
app.get('/cities', (req, res) => {
  const query = req.query.q;
  const result = [];
  if (query) {
    const cityMatches = cities.filter((city) => city.name.toLowerCase().includes(query.toLowerCase()));
    cityMatches.forEach((cityMatch) => {
      const { country: code } = cityMatch;
      const extraData = countries.filter((country) => country.alpha2Code.toLowerCase().includes(code.toLowerCase()))[0];
      result.push({ ...cityMatch, flag: extraData.flag });
    });
  }
  res.status(200).send(JSON.stringify(result));
});

// This endpoint proxies requests to openWeather to get current weather data by cityId
app.get('/forecast', (req, res) => {
  const { id: cityId, name: cityName, lon, lat, country: countryName } = req.query;
  axios
    .get(`${API}/onecall`, {
      params: {
        lon,
        lat,
        exclude: 'minutely,hourly',
        appid
      }
    })
    .then((response) => {
      // REQ OK
      // RES OK (STATUS === 200)
      // const responseCountryCode = currentRes.data.sys.country;
      const countryData = countries.filter((country) =>
        country.alpha2Code.toLowerCase().includes(countryName.toLowerCase())
      )[0];
      res.status(response.status).send(
        JSON.stringify({
          forecast: { ...response.data.daily },
          extraData: {
            lon,
            lat,
            cityName,
            cityId,
            timezoneOffset: response.data.timezone_offset,
            tz: response.data.timezone,
            ...countryData
          }
        })
      );
    })
    .catch((error) => {
      if (error.response) {
        // REQ OK
        // RES OK (STATUS !== 200)
        res.status(error.response.status).send(error.response.data);
      } else if (error.request) {
        // REQ OK
        // RES ERROR
        res.status(400).send(error.message);
      } else {
        // REQ ERROR
        res.status(500).send(error.message);
      }
    });
});

// /ipLocation: This endpoint proxies requests to ip-api to get the IP location information
app.get('/ipLocation', (req, res) => {
  // const ip = req.connection.remoteAddress; <-- This won't work as node in this case is acting as proxy
  const ip = req.headers['x-forwarded-for'];
  const url = `http://ip-api.com/json/${ip}`;
  axios
    .get(url)
    .then((response) => {
      // REQ OK
      // RES OK (STATUS === 200)
      console.log(response.data);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      if (error.response) {
        // REQ OK
        // RES OK (STATUS !== 200)
        res.status(error.response.status).send(error.response.data);
      } else if (error.request) {
        // REQ OK
        // RES ERROR
        res.status(400).send(error.message);
      } else {
        // REQ ERROR
        res.status(500).send(error.message);
      }
    });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`node listening on port ${PORT}`);
});
