import React from 'react';
import { ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function City(props) {
  const { city, onCityClick } = props;
  const { id, name, state, flag, coord, country } = city;
  const { lon, lat } = coord;

  const useStyles = makeStyles({
    avatar: {
      minWidth: '40px'
    },
    small: {
      height: '24px',
      width: '24px'
    },
    ListItemText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  });

  const classes = useStyles();

  return (
    <ListItem minwidth='0px' button onClick={() => onCityClick(id, name, lon, lat, country)}>
      <ListItemAvatar classes={{ root: classes.avatar }}>
        <Avatar className={classes.small} variant='circle' alt={`country flag of ${name}`} src={flag} />
      </ListItemAvatar>
      <ListItemText disableTypography classes={{ root: classes.ListItemText }}>
        {state && `${state} - `}
        {name}
      </ListItemText>
    </ListItem>
  );
}

export default City;
