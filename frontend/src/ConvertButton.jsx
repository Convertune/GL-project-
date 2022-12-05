import React from "react";
import useWebSocket from "react-use-websocket";
import "./ConvertButton.css";

const ConvertButton = ({obj}) => {
  const socketUrl = "ws://localhost:3002"; 

  const { sendJsonMessage, lastMessage } = useWebSocket(socketUrl);

  console.log(lastMessage);

  const submit = (event) => {
    sendJsonMessage(obj);
    event.preventDefault();
  }

  return (
    <form>
      <button onClick = {submit} className = "ConvertButton" type="submit">Convert!</button>
    </form>
  )
}

export default ConvertButton;