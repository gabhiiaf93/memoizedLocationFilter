import { memo } from "react";
import "./searchBox.css";

/**
 * Returns component to show the input field to filter locations
 *
 * @param {onChangeHandler} The function getting called on user input
 * @return {React.FunctionComponent}
 */
const SearchBox = ({ onSearchHandler }) => {
  return (
    <div className="searchContainer">
      <span className="material-symbols-outlined icon"></span>
      <input
        type="text"
        className="searchInput"
        placeholder="Filter locations"
        onChange={(e) => onSearchHandler(e.currentTarget.value)}
      />
    </div>
  );
};

export const MemoizedSearchBox = memo(SearchBox);
