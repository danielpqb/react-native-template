import AppContext from "@/contexts/AppContext";
import { FC, ReactNode } from "react";
import ThemeContext from "@/contexts/ThemeContext";
import HomeScreen from "@/screens/HomeScreen";

type TContextsProps = {
  children: ReactNode;
};
const Contexts: FC<TContextsProps> = ({ children }) => {
  return (
    <AppContext>
      <ThemeContext>{children}</ThemeContext>
    </AppContext>
  );
};

type TIndexProps = {};
const Index: FC<TIndexProps> = () => {
  return (
    <Contexts>
      <HomeScreen />
    </Contexts>
  );
};

export default Index;
