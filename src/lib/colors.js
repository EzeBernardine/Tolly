export const getColorFromTheme = ({ colorTheme, theme }) => {
  return colorTheme
    ? // -----------primary-----------
      colorTheme === "primary/default"
      ? theme.palette.primary.default
      : colorTheme === "primary/black"
      ? theme.palette.primary.black //done
      : colorTheme === "primary/fade"
      ? theme.palette.primary.fade
      : colorTheme === "primary/line"
      ? theme.palette.primary.line
      : colorTheme === "primary/dark"
      ? theme.palette.primary.dark
      : colorTheme === "primary/darker"
      ? theme.palette.primary.darker
      : // -------------------  white----------------
      colorTheme === "white"
      ? theme.palette.white
      : // -----------------------background----------
      colorTheme === "black"
      ? theme.palette.common.black
      : //   ----------------------lastlt--------------
        "blue"
    : "'red";
};
