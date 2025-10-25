import { useEffect, useState, useRef, useEffectEvent } from "react";
import Sidebar from "./Components/Sidebar";
import Welcome from "./Components/Welcome";

import Chatroom from "./Components/Chatroom";

function App() {
  const [message, setmessage] = useState(["Hi There", "How are you friend"]);
  const [usermessage, setusermessage] = useState("");
  const wsref = useRef<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsref.current = ws;
    //as soon as user connects to the server
    ws.onopen = () => console.log("Connected to WebSocket");
    // if there is a message from the server to the client and remasins open no matter what until server is closed
    ws.onmessage = (event) => {
      setmessage((prev) => [...prev, event.data]);
    };

    ws.onerror = (err) => console.error("WebSocket error:", err);
    ws.onclose = () => console.log("Disconnected");

    return () => ws.close();
  }, []);

  useEffect(() => {
    if (usermessage.trim() != "" && wsref.current) {
      const messageobj = {
        type: "Chat",
        payload: {
          roomId: "123",
          message: usermessage,
        },
      };
      wsref.current.send(JSON.stringify(messageobj));
      console.log("📤 Sent:", messageobj);
    }
  }, [usermessage]);

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[30px] w-[100%] bg-black text-white flex items-center justify-center">
        <p className=" text-sm ">
          Raccoon is in the alpha stage. Please report any bugs you find to the
          <span className="pl-1 font-bold">
            <a href="https://github.com/0xtusharganotra">developer</a>
          </span>
          . Thank you!
        </p>
      </div>
      <div className="flex max-w-[100vw]  h-[calc(100vh-30px)] m-auto">
        <Sidebar />
        <Chatroom message={message} setusermessage={setusermessage} />
      </div>
    </div>
  );
}

export default App;
