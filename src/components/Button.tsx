import {
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { FC, ReactNode } from "react";
import { gSC } from "@/styles/global";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: gSC("blue600"),
    borderRadius: 8,
    width: "auto",
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: gSC("black", 0.2),
  },
  text: {
    color: gSC("white"),
    fontSize: 18,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    verticalAlign: "middle",
  },
});

type TButtonProps = {
  onPress?: () => void;
  hRef?: string;
  children?: ReactNode;
  style?: ViewStyle & TextStyle;
};

const PressableButton: FC<TButtonProps> = ({
  onPress = () => {},
  children = "Button",
  style,
}) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={{
        ...styles.button,
        ...(style ? { ...style } : {}),
      }}
    >
      <Text
        style={{
          ...styles.text,
          ...(style?.color ? { color: style.color } : {}),
          ...(style?.fontSize ? { fontSize: style.fontSize } : {}),
          ...(style?.fontWeight ? { fontWeight: style.fontWeight } : {}),
          ...(style?.fontFamily ? { fontFamily: style.fontFamily } : {}),
          ...(style?.fontVariant ? { fontVariant: style.fontVariant } : {}),
          ...(style?.textAlign ? { textAlign: style.textAlign } : {}),
          ...(style?.verticalAlign
            ? { verticalAlign: style.verticalAlign }
            : {}),
          ...(style?.textAlignVertical
            ? { textAlignVertical: style.textAlignVertical }
            : {}),
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const LinkButton: FC<TButtonProps> = (props) => {
  props.children = props?.children ?? "Link";
  return (
    <Link
      href={props.hRef ?? ""}
      asChild
    >
      <PressableButton {...props}></PressableButton>
    </Link>
  );
};

const Button: FC<TButtonProps> = (props) => {
  if (props?.hRef) return <LinkButton {...props}></LinkButton>;
  return <PressableButton {...props}></PressableButton>;
};

export default Button;
