import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Fade } from '@material-ui/core';
import { fetchIpLocation, setCityToSearch } from '../../redux';

function IpLocation() {
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
    dispatch(fetchIpLocation());
  }, [dispatch]);

  return (
    fetchState === 'fulfilled' &&
    response &&
    !cityToSearch.id && (
      <Fade in timeout={1000}>
        <Link href='#' onClick={handleClickLink} variant='body1'>
          <em>
            ...Or use <strong>{`<${response.city}-${response.countryCode}>`}</strong> (auto-detected)
          </em>
        </Link>
      </Fade>
    )
  );
}

export default IpLocation;
