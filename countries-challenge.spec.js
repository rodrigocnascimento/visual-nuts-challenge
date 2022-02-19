// Write a function in javascript that:
// - returns the number of countries in the world
// - finds the country with the most official languages, where they officially speak German (de)
// - that counts all the official languages spoken in the listed countries.
// - to find the country with the highest number of official languages.
// - to find the most common official language(s), of all countries

const countryHelper = require("./countries-challenge");
test("should return the number of countries in the world", () => {
  expect(countryHelper.getNumberOfCountries()).toEqual(5);
});

test("returns the number of countries in the world", () => {
  expect(countriesChallenge.getNumberOfCountries()).toEqual(5);
});
