import { createContext } from "react";

export const HelloWordContext = createContext();

export const TodosContextProvider = ({ children }) => {
  return (
    <HelloWordContext.Provider value={'hello word!'}>
      {children}
    </HelloWordContext.Provider>
  );
}