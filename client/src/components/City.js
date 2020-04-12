import React from 'react';
import { ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function City(props) {
  const { city, onCityClick } = props;

  const useStyles = makeStyles({
    small: {
      height: '24px',
      width: '24px'
    }
  });

  const classes = useStyles();

  return (
    <ListItem button onClick={() => onCityClick(city.id, city.name)}>
      <ListItemAvatar>
        <Avatar
          className={classes.small}
          variant='rounded'
          size='small'
          alt='la'
          src={`https://www.countryflags.io/${city.country}/shiny/24.png`}
        />
      </ListItemAvatar>
      <ListItemText>
        {city.state && `${city.state} - `}
        {city.name}
      </ListItemText>
    </ListItem>
  );
}

export default City;
