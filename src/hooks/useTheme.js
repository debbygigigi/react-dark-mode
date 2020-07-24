import { useState, useEffect } from "react";
import useLocalStorage from "react-use-localstorage";

import darkTheme from "../themes/dark.json";
import lightTheme from "../themes/light.json";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const toggleTheme = async (theme) => {
  if (theme === THEME.LIGHT) {
    window.less.modifyVars(lightTheme);
  } else {
    window.less.modifyVars(darkTheme);
  }
};

export default () => {
  const [localTheme, setLocalTheme] = useLocalStorage("APP_THEME", THEME.DARK);
  const [theme, setTheme] = useState(localTheme || THEME.DARK);

  useEffect(() => {
    setLocalTheme(theme);
    toggleTheme(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
