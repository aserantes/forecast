import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Box } from '@material-ui/core';
import { toggleCelcius } from '../redux/ui';

function CelciusToggler() {
  const dispatch = useDispatch();
  const prefersCelcius = useSelector((state) => state.ui.prefersCelcius);

  const handleClick = () => {
    dispatch(toggleCelcius());
  };

  return (
    <Box display='flex' fontFamily='monospace' fontSize='16px' alignItems='center'>
      <Box>°F</Box>
      <Switch checked={prefersCelcius} onChange={handleClick} color='default' />
      <Box>°C</Box>
    </Box>
  );
}

export default CelciusToggler;
