import React from 'react';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  Box,
  IconButton,
  Avatar,
  MenuItem,
  ListItem,
  Menu,
  List,
  Divider,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  Typography,
  Paper,
  Toolbar
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Brightness5 as SunIcon,
  Brightness3 as MoonIcon,
  Delete as DeleteIcon
} from '@material-ui/icons';

import DarkModeToggler from './DarkModeToggler';
import CelciusToggler from './CelciusToggler';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  item: {
    minWidth: '300px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontWeight: 'bold',
    fontSize: '14'
  },
  dot: {
    margin: '2px'
  }
}));

function MainMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const previousCities = useSelector((state) => state.ui.previousCities);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCityNameClick = () => {
    window.alert('Name click!');
  };

  const handleCityDelClick = () => {
    window.alert('Del click!');
  };

  return (
    <Paper position='static' color='primary'>
      <Toolbar>
        <IconButton
          edge='start'
          aria-label='menu1'
          aria-controls='menu1'
          aria-haspopup='true'
          onClick={handleMenuClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} component='span'>
          WEE
        </Typography>
        <Typography className={classes.dot} variant='h3' component='span' color='secondary'>
          ·
        </Typography>
        <Typography component='span'>WEATHER</Typography>
        <Typography className={classes.dot} variant='h3' component='span' color='primary'>
          ·
        </Typography>
        <Typography component='span'>APP</Typography>
      </Toolbar>
      <Menu id='menu1' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <List subheader={<ListSubheader>SETTINGS</ListSubheader>}>
          <ListItem className={classes.item}>
            <ListItemText>Dark Mode</ListItemText>
            <Avatar className={classes.small}>
              <SunIcon />
            </Avatar>
            <DarkModeToggler />
            <Avatar className={classes.small}>
              <MoonIcon />
            </Avatar>
          </ListItem>
          <ListItem>
            <ListItemText>Temp. Unit</ListItemText>
            <Avatar className={classes.small} size='small'>
              <Box fontWeight='bold' fontSize='1.2em'>
                F
              </Box>
            </Avatar>
            <CelciusToggler />
            <Avatar className={classes.small} size='small'>
              <Box fontWeight='bold' fontSize='1.2em'>
                C
              </Box>
            </Avatar>
          </ListItem>
        </List>
        {previousCities.length > 0 && <Divider /> && (
          <List subheader={<ListSubheader>PREVIOUS CITIES</ListSubheader>}>
            {previousCities.map((prevCity) => (
              <MenuItem key={prevCity.id} onClick={handleCityNameClick}>
                <ListItemText>{prevCity.name}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete' onClick={handleCityDelClick}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </MenuItem>
            ))}
          </List>
        )}
      </Menu>
    </Paper>
  );
}

export default MainMenu;
