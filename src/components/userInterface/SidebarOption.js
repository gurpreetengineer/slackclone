import React from "react";
import "../uiCustomCss/SidebarOption.css";

function SidebarOption({ Icon, Title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{Title}</h3>
      ) : (
        <h3>
          <span className="sidebarOption__hash">#</span> {Title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
