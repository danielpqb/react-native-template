import { StyleSheet, Text, View } from "react-native";
import { gSC, gStyles } from "../styles/global";
import App from "@/contexts/AppContext";

const styles = StyleSheet.create({
  view: { ...gStyles.growCenter },
  text: {
    color: gSC("orange600"),
    fontSize: 36,
  },
});

export default function Index() {
  return (
    <App>
      <View style={{ ...styles.view }}>
        <Text style={{ ...styles.text }}>Hello World!</Text>
      </View>
    </App>
  );
}
