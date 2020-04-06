import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../redux/cities';
import CityList from './CityList';

function InputResults(props) {
  const { cityNameToSearch, matches, fetchCities } = props;
  useEffect(() => {
    if (cityNameToSearch) {
      fetchCities(cityNameToSearch);
    }
  }, [cityNameToSearch, fetchCities]);

  return matches && <CityList cities={matches} />;
}

const mapStateToProps = ({ cities }) => ({
  cityNameToSearch: cities.cityNameToSearch,
  matches: cities.matches
});

const mapDispatchToProps = { fetchCities };

export default connect(mapStateToProps, mapDispatchToProps)(InputResults);
