const countries = require("./countries.json");

function CountryHelper() {}

CountryHelper.getNumberOfCountries = function () {
  return countries.length;
};

module.exports = CountryHelper;
