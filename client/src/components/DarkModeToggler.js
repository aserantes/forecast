import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { toggleDarkMode } from '../redux/actions';

const DarkModeToggler = (props) => {
  const { toggleDarkMode } = props;
  return (
    <Button variant="contained" onClick={toggleDarkMode}>
      Dark Mode Toggle
    </Button>
  );
};

const mapDispatchToProps = { toggleDarkMode };

export default connect(null, mapDispatchToProps)(DarkModeToggler);
