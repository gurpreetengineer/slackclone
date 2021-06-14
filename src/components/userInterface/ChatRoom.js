import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase/firebase";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import "../uiCustomCss/ChatRoom.css";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

function ChatRoom() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState("")
  const [roomMessages, setRoomMessages] = useState([])

  useEffect(() => {
    db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
      setRoomDetails(snapshot.data())
    })

    db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
      setRoomMessages(snapshot.docs.map(doc => doc.data()))
    })

  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header_left">
          <h4 className="chat__header_channel_name">
            <strong> # {roomDetails && roomDetails.name }</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__header_right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(message => (
          <Messages key={`${message.username}${message.timestamp}`} Username={message.username} UserImage={message.userImage} Message={message.message} Timestamp={message.timestamp} />
        ))}
      </div>
      <ChatInput channelName={roomDetails ? roomDetails.name : ""} channelId={roomId} />

    </div>
  );
}

export default ChatRoom;
