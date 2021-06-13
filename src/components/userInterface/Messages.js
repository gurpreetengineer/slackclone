import React from "react";
import "../uiCustomCss/Messages.css";

function Messages({ Username, UserImage, Message, Timestamp }) {
  console.log(
    "Username, UserImage, Message, Timestamp >> ",
    Username,
    UserImage,
    Message,
    Timestamp
  );
  console.log("finalTime: ", Date(Timestamp.seconds * 1000));
  return (
    <div className="messages">
      <div className="messages__image_container">
        <img src={UserImage} />
      </div>
      <div className="messages__info_container">
        <h4 className="messages_info_timestamp_container">
          {Username}{" "}
          <span className="messages__timestamp">
            {" "}
            {new Date(Timestamp.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{Message}</p>
      </div>
    </div>
  );
}

export default Messages;
