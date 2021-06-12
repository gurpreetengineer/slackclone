import React from "react";
import EditLogo from "../../assets/editIcon.svg";
import "../uiCustomCss/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo_container">
        <img src={EditLogo} className="sidebar__editLogo" />
      </div>
    </div>
  );
}

export default Sidebar;
