import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const serverIp = process.env.REACT_APP_SERVER_IP
  const serverPort = process.env.REACT_APP_SERVER_PORT  
  const socket = useMemo(() => io(`${serverIp}:${serverPort}`), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
