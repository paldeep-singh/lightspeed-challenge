import { TextProps, Text as RNText } from "react-native";
import { useTheme } from "../utils/theme";

interface ITextProps extends TextProps {
  bold?: boolean;
  fontSize?: number;
  color?: string;
}

export function Text({
  bold = false,
  fontSize = 15,
  color,
  style,
  ...rest
}: ITextProps) {
  const { text } = useTheme();

  return (
    <RNText
      style={[
        {
          color: color ?? text,
          fontWeight: bold ? "700" : "400",
          fontSize,
        },
        style,
      ]}
      {...rest}
    />
  );
}
