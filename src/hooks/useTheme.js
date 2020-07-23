import { useState, useEffect } from "react";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const getTheme = {
  [THEME.LIGHT]: () => import("../themes/light.json"),
  [THEME.DARK]: () => import("../themes/dark.json"),
};

const toggleTheme = async (theme) => {
  const targetTheme = await getTheme[theme]();
  window.less.modifyVars(targetTheme);
};

export default () => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  useEffect(() => {
    const target = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    toggleTheme(target);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
