import "./list-item.css";

/**
 * Returns component to loop over the list of locations and display the city
 * and the country name accordingly
 *
 * @param {cityCountries} list of data after application of filters
 * @param {onCheckboxChangeHandler} to update the checkbox state when clicked
 * @param {selectedLoc} object containing the map of selected location id's
 * @return {React.FunctionComponent}
 */
export const ListItems = ({
  cityCountries,
  onCheckboxChangeHandler,
  selectedLoc,
}) => {
  const isCheckboxSelected = (elementId) => {
    return !!selectedLoc[elementId];
  };
  return (
    <ul onChange={onCheckboxChangeHandler}>
    {cityCountries.map((cityCountry) => {
      const city = cityCountry.city ? cityCountry.city : "Not Provided";
      return(
        <li key={cityCountry.id}>
          <input
            type="checkbox"
            value={cityCountry.id}
            checked={isCheckboxSelected(cityCountry.id)}
          />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a name={city}>{city}</a>
          
          {cityCountry.country ? `- ${cityCountry.country}` : ""}
        </li>
    )})}
  </ul>
  );
};
