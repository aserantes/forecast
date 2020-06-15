export const getTime = (unixTimeStamp, timeZone) => {
  const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone };
  const date = new Date(unixTimeStamp * 1000);
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};

export const getDayOfWeek = (unixTimeStamp, timeZone) => {
  const options = { weekday: 'short', day: '2-digit', timeZone };
  const date = new Date(unixTimeStamp * 1000);
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};

export const getLocalizedNow = (timeZone) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short',
    timeZone
  };
  const date = Date.now();
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};
