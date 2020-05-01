import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '@material-ui/core';
import { toggleDarkMode } from '../redux';

function DarkModeToggler() {
  const dispatch = useDispatch();
  const prefersDarkMode = useSelector((state) => state.ui.prefersDarkMode);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  return <Switch checked={prefersDarkMode} onChange={handleClick} color='default' />;
}

export default DarkModeToggler;
