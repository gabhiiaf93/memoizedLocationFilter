import { useState, useEffect, useRef } from "react";
// import AlphabetList from "./components/AlphabetList";
import "./App.css";
import { MemoizedSearchBox } from "./components/search-box";
import { ListItems } from "./components/list-items";
import { loc, alphabets } from "./data";
import { filterCitiesAndCountries, limitTheNumberOfCalls } from "./helper";
import { ClearAllSelection } from "./components/clear-all";
import { MainNavMenu } from "./components/main-nav-menu";

function App() {
  const optimizedHandler = useRef(null);
  // Maybe can use useContext and create a singluar state for these but not
  // absolutely needed as we are not drilling through a lot of components
  const [cityCountries, updateCityCountries] = useState([]);
  const [selectedLoc, updateSelectedLoc] = useState({});
  const [isMinimised, updateIsMinimised] = useState(false);
  const [isCollapsed, updateIsCollapsed] = useState(false);

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
      <MainNavMenu isMinimised={isMinimised} isCollapsed={isCollapsed} />
      <MemoizedSearchBox onSearchHandler={optimizedHandler.currnet} />
      <ClearAllSelection clearSelectionHandler={clearSelectionHandler} />
      <div
        className={{
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
