import React from 'react';
import { List, ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function CityList(props) {
  const { cities } = props;

  const useStyles = makeStyles({
    small: {
      height: '24px',
      width: '24px'
    },
    scrollable: {
      maxHeight: '300px',
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  });

  const classes = useStyles();

  const renderCities = () =>
    cities.map((city) => (
      <ListItem key={city.id} button>
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
    ));

  return (
    <List className={classes.scrollable} dense>
      {renderCities()}
    </List>
  );
}

export default CityList;
