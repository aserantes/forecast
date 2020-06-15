import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Box } from '@material-ui/core';
import { fetchIpLocation, setCityToSearch } from '../../redux';

function IpLocation(props) {
  const { text } = props;
  const dispatch = useDispatch();

  const response = useSelector((state) => state.ipLocation.response);
  const fetchState = useSelector((state) => state.ipLocation.fetchState);
  const cityToSearch = useSelector((state) => state.forecast.cityToSearch);

  const handleClickLink = (e) => {
    const { countryCode: country, city: name, lon, lat } = response;
    e.preventDefault();
    const id = 'ipLocation';
    dispatch(setCityToSearch({ id, name, lon, lat, country }));
  };

  useEffect(() => {
    if (fetchState !== 'pending') dispatch(fetchIpLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    fetchState === 'fulfilled' &&
    response &&
    !response.message &&
    !cityToSearch.id && (
      <Box m={1}>
        <Link href='#' onClick={handleClickLink} variant='body1'>
          <em>{text}</em>
          <strong>{`${response.city}-${response.countryCode}`}</strong>
        </Link>
      </Box>
    )
  );
}

export default IpLocation;
