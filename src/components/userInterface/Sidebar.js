import React, { userState, useEffect, useState } from "react";
import EditLogo from "../../assets/editIcon.svg";
import "../uiCustomCss/Sidebar.css";
import SidebarOption from "./SidebarOption";

import InboxIcon from '@material-ui/icons/Inbox'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DraftsIcon from "@material-ui/icons/Drafts";
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'

import db from '../../firebase/firebase';

function Sidebar() {
  const [channels, setChannels] = useState([])
  
  useEffect(()=> {
    db.collection('rooms').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      })))
    })
  }, [])
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
      <SidebarOption Icon={InsertCommentIcon} Title="Threads" />
      <SidebarOption Icon={InboxIcon} Title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} Title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} Title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} Title="People & user groups" />
      <SidebarOption Icon={AppsIcon} Title="Apps" />
      <SidebarOption Icon={FileCopyIcon} Title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} Title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} Title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} Title="Add Channel" />
      {channels.map(channel => (
        <SidebarOption key={channel.id} id={channel.id} Title={channel.name} />
      ))}
    </div>
  );
}

export default Sidebar;
