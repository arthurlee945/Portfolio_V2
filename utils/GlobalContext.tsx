import { GlobalStyle } from "@/styles/GlobalStyle";
import { FC, createContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext({
  navState: false,
  setNavStatus: (action: "opened" | "closed" | "toggle") => {},
});

const GlobalContextProvider: FC<GlobalContextProps> = ({ children }) => {
  const [navState, setNavState] = useState<boolean>(false);
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
  const value = {
    navState,
    setNavStatus,
  };
  return (
    <GlobalContext.Provider value={value}>
      <GlobalStyle navState={navState} />
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
