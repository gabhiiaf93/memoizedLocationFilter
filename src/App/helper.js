/*
 * Forces a function to wait a certain amount of time before running again.
 * Debouncing effect
 */
export const limitTheNumberOfCalls = function (func, delay) {
  var timeout;

  return function executedFunction(...args) {
    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

/**
 * Returns filtered list of city + countries object based on the search input
 *
 * @param {cityCountries} list of city and countries
 * @param {searchParam} input given by the user to filter
 * @return {Array} array of city and countries object to show on the screen
 * @return {Array} array  of city and countries object to show on the screen of unique first charecter elements from city
 */
export const filterCitiesAndCountries = (citiesCountries, searchParam) => {
  if (searchParam === "") {
    return citiesCountries;
  }
  const filteredCountries = citiesCountries.filter((cityCountry) => {
    const { city = "", country = "" } = cityCountry;
    if (
      city.toLowerCase().includes(searchParam.toLowerCase()) ||
      country.toLowerCase().includes(searchParam.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const updatedAnchorLinks = getAnchorLinksData(filteredCountries);
  return {
    filteredCountries,
    updatedAnchorLinks
  }
};

/**
 * Returns filtered list of city + countries object based on the search input
 *
 * @param {cityCountries} list of city and countries (maybe filtered or original)
 * @return {Array} array  of city and countries object to show on the screen of unique first charecter elements from city
 */
export const getAnchorLinksData = (countriesCities) => {
  const comparisionMap = {};

  return countriesCities.filter((ele) => {
    const {city} = ele;
    const firstLetter = city.charAt(0);
    if(comparisionMap[firstLetter]) {
      return false
    }
    comparisionMap[firstLetter] = true;
    return true;
  })
}
