import { useState, useEffect, useRef } from "react";
// import AlphabetList from "./components/AlphabetList";
import "./App.css";
import { MemoizedSearchBox } from "./components/search-box";
import { ListItems } from "./components/list-items";
import { loc, alphabets } from "./data";
import { filterCitiesAndCountries, limitTheNumberOfCalls } from "./helper";
import { ClearAllSelection } from "./components/clear-all";
import { MainNavMenu } from "./components/main-nav-menu";
import { RESIZE_TYPES } from "./constant";
function App() {
  const optimizedHandler = useRef(null);
  const specialStyle = useRef("");
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
  const onIconsClickHandler = (selectedElementVal) => {
    switch (selectedElementVal) {
      case RESIZE_TYPES.MAXIMIZE:
        updateIsMinimised(false);
        updateIsCollapsed(false);
        break;
      case RESIZE_TYPES.MINIMIZE:
        updateIsMinimised(true);
        updateIsCollapsed(false);
        break;
      case RESIZE_TYPES.COLLAPSE:
        updateIsCollapsed(true);
        updateIsMinimised(false);
        break;
      case RESIZE_TYPES.EXPAND:
        updateIsCollapsed(false);
        updateIsMinimised(false);
        break;
      default:
        break;
    }
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
  const showSpecialStyle = isCollapsed || isMinimised;
  if(showSpecialStyle) {
    specialStyle.currnet = isCollapsed ? "parentCollapsed" : "parentMinimised";
  } 
  return (
    <div className={`parentContainer ${showSpecialStyle ? specialStyle.currnet : ''}` }>
      <MainNavMenu
        isMinimised={isMinimised}
        isCollapsed={isCollapsed}
        onClickHandler={onIconsClickHandler}
      />
      {!isMinimised && !isCollapsed && (
        <>
          <MemoizedSearchBox onSearchHandler={optimizedHandler.currnet} />
          <ClearAllSelection clearSelectionHandler={clearSelectionHandler} />
          <div className="listItems">
            <div>
              <ListItems
                cityCountries={cityCountries}
                onCheckboxChangeHandler={onCheckboxChangeHandler}
                selectedLoc={selectedLoc}
              />
            </div>
            <div>{/* <AlphabetList alphabets={alphabets} /> */}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
