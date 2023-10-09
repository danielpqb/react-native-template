import { FC, ReactNode, createContext, useContext, useEffect } from "react";

type AppContextType = {};
const AppContext = createContext<AppContextType>({});

type AppProps = {
  children: ReactNode;
};
const App: FC<AppProps> = ({ children }) => {
  useEffect(() => {
    
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default App;
export function useAppContext() {
  return useContext(AppContext);
}
