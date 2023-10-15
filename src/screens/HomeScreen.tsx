import { StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { gSC, gStyles } from "@/styles/global";
import Button from "@/components/Button";

const styles = StyleSheet.create({
  view: { ...gStyles.growCenter },
  text: {
    color: gSC("zinc200"),
    fontSize: 50,
    paddingBottom: 20,
  },
});

type THomeScreenProps = {};
const HomeScreen: FC<THomeScreenProps> = () => {
  return (
    <View style={{ ...styles.view, gap: 15 }}>
      <Text style={{ ...styles.text }}>Home</Text>
      <Button
        onPress={async () => {
          console.warn("Hello! I'm a Button.")
        }}
      >
      </Button>
    </View>
  );
};

export default HomeScreen;
