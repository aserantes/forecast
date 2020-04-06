import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleDarkMode } from '../redux/ui';

function DarkModeToggler() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Button variant='contained' onClick={handleClick}>
      Dark Mode Toggle
    </Button>
  );
}

export default DarkModeToggler;
