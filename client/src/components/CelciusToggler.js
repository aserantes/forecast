import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '@material-ui/core';
import { toggleCelcius } from '../redux';

function CelciusToggler() {
  const dispatch = useDispatch();
  const prefersCelcius = useSelector((state) => state.ui.prefersCelcius);

  const handleClick = () => {
    dispatch(toggleCelcius());
  };

  return <Switch checked={prefersCelcius} onChange={handleClick} color='default' />;
}

export default CelciusToggler;
