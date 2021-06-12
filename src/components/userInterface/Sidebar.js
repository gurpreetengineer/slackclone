import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EditLogo from "../../assets/editIcon.svg";
import "../uiCustomCss/Sidebar.css";
import SidebarOption from "./SidebarOption";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__slack_info">
          <div>
            <div className="sidebar__login_name">__LoginUser__</div>
          </div>
          <div className="sidebar__logo_container">
            <img src={EditLogo} className="sidebar__editLogo" />
          </div>
        </div>
        <div className="sidebar__user_info">
            <FiberManualRecordIcon className="sidebar__fiber_manual_icon" />
            <h2 className="sidebar__username">UserName</h2>
        </div>
      </div>
      <SidebarOption Title="Hello world"/>
      <SidebarOption Icon={FiberManualRecordIcon} Title="FiberManual" />
      <SidebarOption Icon={AlternateEmailIcon} Title="AlternateEmailIcon" />
    </div>
  );
}

export default Sidebar;
