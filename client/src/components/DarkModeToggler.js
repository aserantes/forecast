import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleDarkMode } from '../redux/actions';

function DarkModeToggler(props) {
  const { toggleDarkMode } = props;
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Dark Mode Toggle
    </Button>
  );
}

const mapDispatchToProps = { toggleDarkMode };

export default connect(null, mapDispatchToProps)(DarkModeToggler);
