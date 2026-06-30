import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type ButtonProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

export function ButtonComponent({ style, children, ...props }: ButtonProps) {
  return (
    <Pressable style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E31B23",
    borderRadius: 13,
    paddingHorizontal: 60,
    paddingVertical: 16,
    alignItems: "center",
  },
  text: {
    color: "#F0F0F0",
    fontSize: 18,
    fontWeight: "bold",
  },
});
