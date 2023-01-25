const stringCapitalize = (string) => {
  const capitalizeString = string[0].toUpperCase() + string.slice(1);
  return capitalizeString;
}

module.exports = stringCapitalize;