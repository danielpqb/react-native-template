import { StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { gSC, gStyles } from "@/styles/global";
import Button from "@/components/Button";

const styles = StyleSheet.create({
  view: { ...gStyles.growCenter },
  text: {
    color: gSC("orange600"),
    fontSize: 36,
  },
});

type THomeScreenProps = {};
const HomeScreen: FC<THomeScreenProps> = () => {
  return (
    <View style={{ ...styles.view }}>
      <Text style={{ ...styles.text }}>App!</Text>
      <Button hRef="/auth"></Button>
    </View>
  );
};

export default HomeScreen;
