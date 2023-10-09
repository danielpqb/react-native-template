import { StyleSheet, Text, View } from "react-native";
import App from "../contexts/AppContext";
import { gCS, gStyles } from "../styles/global";

const styles = StyleSheet.create({
  view: { ...gStyles.growCenter },
  text: {
    color: gCS("amber600"),
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
