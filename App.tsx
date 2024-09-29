import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "./components/Text";
import { theme, ThemeContext } from "./utils/theme";

export default function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
