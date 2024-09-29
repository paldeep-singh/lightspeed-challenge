import { createContext, useContext } from "react";

interface ITheme {
  text: string;
  primary: string;
  primaryText: string;
  primaryHighlight: string;
  background: string;
  border: string;
  accent: string;
}

export const theme: ITheme = {
  text: "#464A51",
  primary: "#2E61DE",
  primaryHighlight: "#6c90e7",
  primaryText: "#FFFFFF",
  background: "#FFFFFF",
  border: "#D3D3D3",
  accent: "#D7DCE1",
};

export const ThemeContext = createContext<ITheme>(theme);

export const useTheme = (): ITheme => useContext(ThemeContext);
