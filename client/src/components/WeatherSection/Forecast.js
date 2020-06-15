import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, Avatar } from '@material-ui/core';
import { getDayOfWeek, k2c, k2f } from '../../helpers';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '12px',
    flexDirection: 'row'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1'
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
});

function Forecast(props) {
  const classes = useStyles();
  const { forecast, tz } = props;
  const days = [1, 2, 3, 4, 5];
  const nextFiveDays = Object.values(forecast).filter((item, index) => days.includes(index));

  const prefersCelcius = useSelector((state) => state.ui.prefersCelcius);

  const renderDays = () =>
    nextFiveDays.map((day) => {
      const { dt, sunrise, temp, weather } = day;
      const { day: mainTemp } = temp;
      const formattedDate = getDayOfWeek(dt, tz);
      const formattedTemp = prefersCelcius ? k2c(mainTemp) : k2f(mainTemp);
      const { icon } = weather[0];
      return (
        <Grid item xs key={sunrise} className={classes.item}>
          <Grid className={classes.row}>{formattedDate}</Grid>
          <Grid className={classes.row}>
            <Avatar alt='sss' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Grid>
          <Grid className={classes.row}>{formattedTemp}</Grid>
        </Grid>
      );
    });

  return <Grid className={classes.container}>{renderDays()}</Grid>;
}

export default Forecast;
