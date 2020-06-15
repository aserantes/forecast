import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, IconButton } from '@material-ui/core';
import { useDebouncedCallback } from 'use-debounce';
import { Clear as ClearIcon } from '@material-ui/icons';
import { setCityNameToSearch, setInputValue } from '../../redux';
import IpLocation from '../IpLocation/IpLocation';

function CityInput() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const inputValue = useSelector((state) => state.ui.inputValue);
  const fetchState = useSelector((state) => state.cities.fetchState);

  const [debouncedCallback] = useDebouncedCallback((value) => {
    if (inputValue.length > 1) dispatch(setCityNameToSearch(value));
  }, 1000);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setInputValue(value));
    debouncedCallback(value);
  };

  const handleClear = () => {
    dispatch(setInputValue(''));
    inputRef.current.focus();
  };

  return (
    <>
      <TextField
        inputRef={inputRef}
        label='Enter city name'
        id='outlined-margin-normal'
        variant='outlined'
        fullWidth
        onChange={handleChange}
        value={inputValue}
        disabled={fetchState === 'pending'}
        autoComplete='off'
        InputProps={{
          endAdornment: inputValue && (
            <IconButton edge='end' onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          )
        }}
      />
      <br />
      <IpLocation text='...Or use device IP location: ' />
    </>
  );
}

export default CityInput;
