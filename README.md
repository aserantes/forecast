## Weather App

_(a functional React/Redux skills demo app)_

### Frontend:

- **Modern Redux**
  - react-redux: useSelector/useDispatch hooks
  - redux-toolkit: reduced boilerplate and tidy syntax with createSlice, configureStore, etc.
- **Modern React**: 100% functional components with built-in and custom hooks.
- **Material UI**: full usage of Material design with esponsive layout, global theme, darkMode, svg Icons, transitions, etc.
- **react-window**: FixedSizeList for fast and performant long lists used for city search results.

### Backend:

- Small and efficient **Node.js / express / axios** backend serving the following:
  - static react production build
  - custom internal API for querying cities and countries data
  - external API proxy to fetch current weather data by city ID
  - additional data injection to api responses from local country data in JSON
  - environment variables for api keys security
  - server side error handling and reporting at frontend

### Instructions

- Pull the repo, go to root directory and install deps with `npm install` or `yarn install`
- Execute script `npm run dev` or `yarn dev` in root directory.
- Remember to create a .env file with your own credentials to the [weather api](https://openweathermap.org/current) and place it in `/code/server/`. (Use the same syntax as in file `.env.example`)

### > [Link to online production build](http://wee-weather-app.herokuapp.com/) <

**_Alejandro Serantes_**

_aserantes@gmail.com_

_https://www.linkedin.com/in/alejandro-serantes/_
