import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerNavigationOptions,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/routers";
import { RouteProp } from "@react-navigation/native";
import { Layout } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/Button";
import { gSC } from "@/styles/global";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: gSC("zinc100", 0.2),
  },
  text: { fontSize: 18, fontWeight: "bold", color: gSC("orange600") },
});

type HeaderProps = {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
  route: RouteProp<ParamListBase>;
  layout: Layout;
  options: DrawerNavigationOptions;
};
const Header: React.FC<HeaderProps> = ({
  navigation,
  layout,
  options,
  route,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={{ ...styles.container }}>
        <Button
          style={{ padding: 0, backgroundColor: "transparent", borderWidth: 0 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons
            name={"menu-outline"}
            size={40}
            color={gSC("zinc100")}
          />
        </Button>
        <Text style={{ ...styles.text }}>{options.title}</Text>
        <Button
          onPress={async () => {}}
          style={{
            backgroundColor: "transparent",
            color: gSC("zinc100"),
            borderWidth: 0,
            fontSize: 16,
            padding: 0,
          }}
        >
          <Ionicons
            name={"add"}
            size={35}
            color={gSC("zinc100")}
          />
        </Button>
      </View>
    </>
  );
};

export default Header;
