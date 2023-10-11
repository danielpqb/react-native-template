import { StyleSheet, Text, View } from "react-native";
import { gSC, gStyles } from "../styles/global";
import AppContext from "@/contexts/AppContext";
import { FC, ReactNode } from "react";
import ThemeContext from "@/contexts/ThemeContext";

const styles = StyleSheet.create({
  view: { ...gStyles.growCenter },
  text: {
    color: gSC("orange600"),
    fontSize: 36,
  },
});

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

export default function Index() {
  return (
    <AppContext>
      <View style={{ ...styles.view }}>
        <Text style={{ ...styles.text }}>Hello World!</Text>
      </View>
    </AppContext>
  );
}
