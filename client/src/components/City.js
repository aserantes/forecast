import React, { useState } from 'react';
import { ListItemAvatar, Avatar, ListItem, ListItemText, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function City(props) {
  const { city, onCityClick } = props;
  const [showFlag, setShowFlag] = useState(false);

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
    <Fade in>
      <ListItem button onClick={() => onCityClick(city.id, city.name)}>
        <ListItemAvatar classes={{ root: classes.avatar }}>
          <Fade in={showFlag}>
            <Avatar
              className={classes.small}
              variant='rounded'
              size='small'
              alt={`country flag of ${city.name}`}
              src={`https://www.countryflags.io/${city.country}/shiny/24.png`}
              onLoad={() => setShowFlag(true)}
            />
          </Fade>
        </ListItemAvatar>
        <ListItemText disableTypography classes={{ root: classes.root }}>
          {city.state && `${city.state} - `}
          {city.name}
        </ListItemText>
      </ListItem>
    </Fade>
  );
}

export default City;
