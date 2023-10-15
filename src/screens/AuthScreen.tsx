import { useAppContext } from "@/contexts/AppContext";
import { gSC, gStyles } from "@/styles/global";
import { FC, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  view: { ...gStyles.growCenter },
  text: {
    color: gSC("orange600"),
    fontSize: 36,
  },
});

type TAuthScreenProps = {};
const AuthScreen: FC<TAuthScreenProps> = () => {
  return (
    <View style={{ ...styles.view }}>
      <Text style={{ ...styles.text }}>Auth!</Text>
    </View>
  );
};

export default AuthScreen;
