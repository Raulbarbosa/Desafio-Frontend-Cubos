import { createContext } from "react";
import useUtilsProvider from "../hooks/useUtilsProvider";

const Context = createContext({});

export function Provider(props) {
  return (
    <Context.Provider value={useUtilsProvider()}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
