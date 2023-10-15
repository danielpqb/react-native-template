import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";
import Header from "./Header";
const { Navigator } = createDrawerNavigator();
const Drawer = withLayoutContext(Navigator);

export default function NavigationDrawer() {
  return (
    <>
      <Drawer
        detachInactiveScreens
        screenOptions={() => ({
          sceneContainerStyle: { backgroundColor: "transparent" },
          header: ({ navigation, route, layout, options }) => (
            <>
              <Header
                navigation={navigation}
                route={route}
                layout={layout}
                options={options}
              />
            </>
          ),
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            title: "Início",
          }}
        />
        <Drawer.Screen
          name="auth"
          options={{
            drawerLabel: "Auth",
            title: "Auth",
          }}
        />
      </Drawer>
    </>
  );
}
