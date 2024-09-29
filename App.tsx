import { theme, ThemeContext } from "./utils/theme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { OrderScreen } from "./screens/Order";

export default function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <OrderScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}
