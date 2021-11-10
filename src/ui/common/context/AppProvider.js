import React from "react";

import AppContext from "./AppContext";

import { useContextData } from "../../../hooks";

const AppProvider = ({ children }) => {
  const { contextData } = useContextData();

  return (
    <AppContext.Provider value={{ ...contextData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
