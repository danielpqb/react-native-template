import { FC, ReactNode, createContext, useContext } from "react";

type TContext = {};
const Context = createContext<TContext>({} as TContext);

type TProps = {
  children: ReactNode;
};
const ThemeContext: FC<TProps> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default ThemeContext;
export function useThemeContext() {
  return useContext(Context);
}
