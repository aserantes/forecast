const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: false };

export const getDate = (dateTime) => new Intl.DateTimeFormat('default', dateOptions).format(dateTime);
export const getTime = (dateTime) => new Intl.DateTimeFormat('default', timeOptions).format(dateTime * 1000);
