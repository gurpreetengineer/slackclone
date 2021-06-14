import React, { useState } from 'react'
import firebase from 'firebase'
import db from '../../firebase/firebase';
import { useStateValue } from '../../authentication/authContext';

function ChatInput({channelName, channelId}) {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue();

  const handleSubmit = e => {
    e.preventDefault();

    if(channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        username: user.displayName,
        userImage: user.photoURL,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp,
      })
    }

  }

  return (
    <div className="chatInput">
      <form>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName ? channelName.toLowerCase() : "this channel"}`} />
        <button type="submit" onClick={handleSubmit}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
