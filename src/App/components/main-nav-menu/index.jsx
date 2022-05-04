import "./main-nav.css";
import { RESIZE_TYPES } from "../../constant";
export const MainNavMenu = ({ isCollapsed, isMinimised, onClickHandler }) => {
  return (
    <div className="filters">
      <div>
        <h4 className={isCollapsed ? 'verticalPosition' : ''}>Locations</h4>
      </div>
      <div className="icons">
        <div>
          {!isMinimised && !isCollapsed && (
            <i
              className="fa-solid fa-window-minimize"
              onClick={() => onClickHandler(RESIZE_TYPES.MINIMIZE)}
            ></i>
          )}
          {isMinimised && (
            <i
              className="fa-solid fa-window-maximize"
              onClick={() => onClickHandler(RESIZE_TYPES.MAXIMIZE)}
            ></i>
          )}
        </div>
        <div>
          {!isMinimised && !isCollapsed && (
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => onClickHandler(RESIZE_TYPES.COLLAPSE)}
            ></i>
          )}
          {isCollapsed && (
            <i
              className="fa-solid fa-arrow-right"
              onClick={() => onClickHandler(RESIZE_TYPES.EXPAND)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
