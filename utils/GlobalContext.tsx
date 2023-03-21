import { GlobalStyle } from "@/styles/GlobalStyle";
import { FC, createContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext({
  navState: false,
  lockState: false,
  setNavStatus: (action: "opened" | "closed" | "toggle") => {},
  setViewPortLock: (action: "opened" | "closed" | "toggle") => {},
});

const GlobalContextProvider: FC<GlobalContextProps> = ({ children }) => {
  const [navState, setNavState] = useState<boolean>(false);
  const [lockState, setLockState] = useState<boolean>(false);
  const setNavStatus = (action: "opened" | "closed" | "toggle") => {
    switch (action) {
      case "opened":
        setNavState(true);
        break;
      case "closed":
        setNavState(false);
        break;
      case "toggle":
        setNavState(!navState);
        break;
    }
  };
  const setViewPortLock = (action: "opened" | "closed" | "toggle") => {
    switch (action) {
      case "opened":
        setLockState(true);
        break;
      case "closed":
        setLockState(false);
        break;
      case "toggle":
        setLockState(!navState);
        break;
    }
  };
  const value = {
    navState,
    lockState,
    setNavStatus,
    setViewPortLock,
  };
  return (
    <GlobalContext.Provider value={value}>
      <GlobalStyle navState={navState} lockState={lockState} />
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
