// Write a function in javascript that:
// - returns the number of countries in the world
// - finds the country with the most official languages, where they officially speak German (de)
// - that counts all the official languages spoken in the listed countries.
// - to find the country with the highest number of official languages.
// - to find the most common official language(s), of all countries

const countriesChallenge = require("./countries-challenge");

test("returns the number of countries in the world", () => {
  expect(countriesChallenge.getNumberOfCountries()).toEqual(5);
});
