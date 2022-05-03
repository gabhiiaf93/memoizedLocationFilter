import { memo } from "react";
import "./clear-all.css";

/**
 * Returns component show clear selection button
 *
 * @param {clearSelectionHandler} to clear the selected locations
 * @return {React.FunctionComponent}
 */
export const ClearAllSelection = ({ clearSelectionHandler }) => {
  return (
    <div className="clearButtonContainer" onClick={clearSelectionHandler}>
      <i className="fa-solid fa-xmark" />
      <label className="clearAllButton">ClearAll</label>
    </div>
  );
};

export const MemoizedClearButton = memo(ClearAllSelection);
