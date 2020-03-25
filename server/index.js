require('dotenv').config();

const cities = require('./cities.json');
const express = require('express');
const axios = require('axios');
const app = express();

// create a .env file at root of project to store environment variables like API KEY, URL and PORT. (See .env.example for syntax)
const PORT = process.env.PORT;
const API = process.env.API_URL;
const appid = process.env.API_KEY;

// This endpoint handles city search by name.
app.get('/cities', (req, res) => {
  const query = req.query.q;
  let result = [];
  if (query) {
    result = cities.filter(city =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  res.status(200).send(result);
});

// This endpoint proxies requests to openWeather to get current weather data by cityId
app.get('/forecast', (req, res) => {
  const id = req.query.id;
  const units = req.query.units;
  axios
    .get(API, {
      params: {
        id,
        units,
        appid
      }
    })
    .then(function(response) {
      res.status(response.status).send(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        res.status(error.response.status).send(error.response.data);
      } else if (error.request) {
        res.status(400).send(error.request);
      } else {
        res.status(500).send(error.message);
      }
      res.status(500).send(error.config);
    });
});

app.listen(PORT, () => {
  console.log(`node listening on port ${PORT}`);
});
