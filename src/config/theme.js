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

const shape = {
  borderRadius: spacing["xsmall"],
};

export const theme = {
  palette,
  shape,
  fontSizes,
  spacing,
};
