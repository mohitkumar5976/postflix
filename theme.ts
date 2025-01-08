import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    hover: Palette["primary"];
  }
  interface PaletteOptions {
    hover?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // White
    },
    secondary: {
      main: "#000000", // Black
    },
    hover: {
      main: "#808080", // Gray
    },
  },
});
