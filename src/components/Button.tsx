import {
  View,
  Pressable,
  StyleSheet,
  Text,
  DimensionValue,
  ColorValue,
} from "react-native";
import { FC, ReactNode } from "react";
import { gSC } from "@/styles/global";

const styles = StyleSheet.create({
  container: { width: "100%" },
  button: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: gSC("orange950"),
    borderRadius: 8,
    height: 60,
    borderWidth: 1,
    borderColor: gSC("black"),
  },
  text: {
    color: gSC("white"),
    // textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "700",
    width: "100%",
    flex: 1,
    textAlign: "center",
    verticalAlign: "middle",
  },
});

type TButtonProps = {
  onPress: () => void;
  children: ReactNode;
  style?: {
    backgroundColor?: string;
    color?: string;
    height?: DimensionValue;
    width?: DimensionValue;
    borderWidth?: number;
    borderColor?: ColorValue;
  };
};
const Button: FC<TButtonProps> = ({ onPress, children, style }) => {
  return (
    <View style={{ ...styles.container }}>
      <Pressable
        onPress={() => {
          onPress();
        }}
        style={{
          ...styles.button,
          backgroundColor: style?.backgroundColor
            ? style?.backgroundColor
            : styles.button.backgroundColor,
          height: style?.height ?? styles.button.height,
          width: style?.width,
          borderWidth: style?.borderWidth ?? styles.button.borderWidth,
          borderColor: style?.borderColor ?? styles.button.borderColor,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: style?.color ? style?.color : styles.text.color,
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
