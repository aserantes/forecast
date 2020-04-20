export const k2c = (k) => {
  return `${Math.round(k - 273.15)}°C`;
};

export const k2f = (k) => {
  return `${Math.round(((k - 273.15) * 9) / 5 + 32)}°F`;
};
