const countries = require("./countries.json");

function CountryHelper() {}

CountryHelper.getCountries = function () {
  return countries;
};

CountryHelper.getNumberOfCountries = function () {
  return countries.length;
};

CountryHelper.findCountriesByLanguage = function (language) {
  const countriesList = CountryHelper.getCountries();

  return countriesList
    .map((country) => country.languages.includes(language) && country)
    .filter(Boolean);
};

CountryHelper.getCountryWithMoreOfficialLanguages = function (countriesList) {
  let maxLanguages = 0;
  let country = {};

  for (let i = 0; i < countriesList.length; i++) {
    let officialLanCounter = countriesList[i].languages.length;

    if (officialLanCounter > maxLanguages) {
      maxLanguages = officialLanCounter;
      country = countriesList[i];
    }
  }
  return country;
};

CountryHelper.getCountryWithMostOfficialLanguagesThatTalksGerman = function () {
  const germanCountries = CountryHelper.findCountriesByLanguage("de");

  return CountryHelper.getCountryWithMoreOfficialLanguages(germanCountries);
};

module.exports = CountryHelper;
