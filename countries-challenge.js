const countries = require("./countries.json");

function CountryHelper() {}

CountryHelper.getCountries = function () {
  return countries;
};

CountryHelper.getNumberOfCountries = function () {
  return countries.length;
};

module.exports = CountryHelper;
