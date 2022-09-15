import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { DeviceStore, UserStore } from "./store";

const Context = createContext(null);
export const useUserContext = () => useContext(Context);

ReactDOM.render(
  <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
