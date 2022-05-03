import "./main-nav.css";

export const MainNavMenu = ({ isCollapsed, isMinimised, onClickHandler }) => {
  return (
    <div className="filters">
      <div>
        <h4>Locations</h4>
      </div>
      <div>
        <div>
          {!isMinimised && <i class="fa-solid fa-window-minimize"></i>}
          {isMinimised && <i class="fa-thin fa-window-maximize"></i>}
        </div>
        <div>
          <i class="fa-solid fa-arrow-left"></i>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};
