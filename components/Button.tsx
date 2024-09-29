import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Text";
import { useTheme } from "../utils/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 4,
    padding: 16,
    minHeight: 56,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});

interface IButtonProps {
  text: string;
  onPress: () => void;
}

export function Button({ text, onPress }: IButtonProps) {
  const { primary, primaryText, primaryHighlight } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? primaryHighlight : primary },
      ]}
    >
      <Text style={[styles.text, { color: primaryText }]}>{text}</Text>
    </Pressable>
  );
}
