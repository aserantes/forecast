import React from 'react';
import { ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function City(props) {
  const { city, onCityClick } = props;

  const useStyles = makeStyles({
    avatar: {
      minWidth: '40px'
    },
    small: {
      height: '24px',
      width: '24px'
    },
    root: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '224px'
    }
  });

  const classes = useStyles();

  return (
    <ListItem button onClick={() => onCityClick(city.id, city.name)}>
      <ListItemAvatar classes={{ root: classes.avatar }}>
        <Avatar
          className={classes.small}
          variant='rounded'
          size='small'
          alt={`country flag of ${city.name}`}
          src={`https://www.countryflags.io/${city.country}/shiny/24.png`}
        />
      </ListItemAvatar>
      <ListItemText disableTypography classes={{ root: classes.root }}>
        {city.state && `${city.state} - `}
        {city.name}
      </ListItemText>
    </ListItem>
  );
}

export default City;
