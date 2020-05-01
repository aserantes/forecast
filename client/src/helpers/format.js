const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: 'numeric',
  minute: '2-digit',
  hour12: false
};

const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: false };

export const getLocalDateTime = (timeZone) => {
  const lclNow = new Date();
  const utcNow = lclNow.getTime() + lclNow.getTimezoneOffset() * 60000;
  const newNow = new Date(utcNow + timeZone * 1000);
  return new Intl.DateTimeFormat('UTC', dateOptions).format(newNow);
};

export const getTime = (dateTime) => new Intl.DateTimeFormat('default', timeOptions).format(dateTime * 1000);
