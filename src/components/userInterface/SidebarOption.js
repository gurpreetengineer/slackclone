import React from "react";
import { useHistory } from "react-router-dom";
import db from '../../firebase/firebase';
import "../uiCustomCss/SidebarOption.css";

function SidebarOption({ id, Icon, Title, addChannelOption }) {
  const history = useHistory();

  const addNewChannel = () => {
    const newChannelName = prompt("Enter your channel name here.")
    if (newChannelName) {
      db.collection('rooms').add({
        name: newChannelName,
      })
    }
  };
  const selectChannel = () => {
    if(id) {
      history.push(`/room/${id}`);
    } else {
      history.push(Title);
    }
  }
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addNewChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{Title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {Title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
