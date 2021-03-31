import { spacing, fontSizes } from "./units";

const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    background: "#f5f8f9",
    default: "#414141",
    fade: "#b7b7b7",
    line: "#f2f2f2",
    dark: "#9b9c9d",
    darker: "#868889",
  },
};

const shadows = {
  0: "none",
  1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
  2: "0px 8px 30px rgba(0, 0, 0, 0.24)",
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: spacing["xsmall"],
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
  fontSizes,
  spacing,
};
