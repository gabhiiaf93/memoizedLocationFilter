import { useState, useEffect, useRef } from "react";
// import AlphabetList from "./components/AlphabetList";
import "./App.css";
import { MemoizedSearchBox } from "./components/search-box";
import { ListItems } from "./components/list-items";
import { loc, alphabets } from "./data";
import { filterCitiesAndCountries, limitTheNumberOfCalls } from "./helper";
import { ClearAllSelection } from "./components/clear-all";

function App() {
  const optimizedHandler = useRef(null);
  const [cityCountries, updateCityCountries] = useState([]);
  const [selectedLoc, updateSelectedLoc] = useState({});

  useEffect(() => {
    updateCityCountries(loc);
    // Since the filter function might become heavy with n number of calls, we are
    // adding debouncing to reduce the load on js thread
    optimizedHandler.currnet = limitTheNumberOfCalls(onSearchHandler, 200);
  }, []);
  const onSearchHandler = (searchParam) => {
    updateCityCountries(filterCitiesAndCountries(loc, searchParam));
  };
  const onCheckboxChangeHandler = (selectedElement) => {
    const elementId = selectedElement.target.value;
    updateSelectedLoc({
      ...selectedLoc,
      [elementId]: true,
    });
  };
  const clearSelectionHandler = () => {
    updateSelectedLoc({});
  };
  return (
    <div className="parent-container">
      <div className="filters">
        <div>
          <h4>Locations</h4>
        </div>
        <div>Filter Icon</div>
      </div>
      <MemoizedSearchBox onSearchHandler={optimizedHandler.currnet} />
      <ClearAllSelection clearSelectionHandler={clearSelectionHandler} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <ListItems
            cityCountries={cityCountries}
            onCheckboxChangeHandler={onCheckboxChangeHandler}
            selectedLoc={selectedLoc}
          />
        </div>
        <div>{/* <AlphabetList alphabets={alphabets} /> */}</div>
      </div>
    </div>
  );
}

export default App;
