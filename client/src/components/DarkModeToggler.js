import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Box } from '@material-ui/core';
import { toggleDarkMode } from '../redux/ui';

function DarkModeToggler() {
  const dispatch = useDispatch();
  const prefersDarkMode = useSelector((state) => state.ui.prefersDarkMode);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Box display='flex' fontFamily='monospace' fontSize='16px' alignItems='center'>
      <Box>Off</Box>
      <Switch checked={!prefersDarkMode} onChange={handleClick} color='default' />
      <Box>On</Box>
    </Box>
  );
}

export default DarkModeToggler;
