// Write a function in javascript that:
// - returns the number of countries in the world
// - finds the country with the most official languages, where they officially speak German (de)
// that counts all the official languages spoken in the listed countries.
// - to find the country with the highest number of official languages.
// - to find the most common official language(s), of all countries

const countryHelper = require("./countries-challenge");
const countriesMock = require("./countries.json");

test("should return the number of countries in the world", () => {
  expect(countryHelper.getNumberOfCountries()).toEqual(5);
});

test("should find the country with the most official languages, where they officially speak German (de) that counts all the official languages spoken in the listed countries.", () => {
  const countryWithMostOfficialLanguagesThatTalksGerman = {
    country: "BE",
    languages: ["nl", "fr", "de"],
  };

  expect(
    countryHelper.getCountryWithMostOfficialLanguagesThatTalksGerman()
  ).toEqual(countryWithMostOfficialLanguagesThatTalksGerman);
});

test("should return countries list that speak NL", () => {
  const nlLangCountries = [
    {
      country: "BE",
      languages: ["nl", "fr", "de"],
    },
    { country: "NL", languages: ["nl"] },
  ];

  jest.spyOn(countryHelper, "getCountries").mockReturnValue([...countriesMock]);

  expect(countryHelper.findCountriesByLanguage("nl")).toEqual(nlLangCountries);
});

test("should return countries list that speak DE", () => {
  const deLangCountries = [
    {
      country: "BE",
      languages: ["nl", "fr", "de"],
    },
    { country: "DE", languages: ["de"] },
  ];

  const countriesByLanguage = [...countriesMock];

  jest
    .spyOn(countryHelper, "getCountries")
    .mockReturnValue(countriesByLanguage);

  expect(countryHelper.findCountriesByLanguage("de")).toEqual(deLangCountries);
});

test("should return the country that speak more languages", () => {
  expect(
    countryHelper.getCountryWithMoreOfficialLanguages(countriesMock)
  ).toEqual({
    country: "BE",
    languages: ["nl", "fr", "de"],
  });
});

test("should return most common languages from country list", () => {
  const countriesByLanguage = [...countriesMock];

  jest
    .spyOn(countryHelper, "getCountries")
    .mockReturnValue(countriesByLanguage);

  expect(countryHelper.mostCommonOfficialLanguage()).toEqual([
    {
      language: "nl",
      count: 2,
    },
    {
      language: "de",
      count: 2,
    },
  ]);
});
