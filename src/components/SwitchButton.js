import React, { useState } from "react";
import { Switch } from "antd";

const THEME = {
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

const SwitchButton = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const target = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

  return (
    <div style={{ display: "inline-block", float: "right", color: "#fff" }}>
      <span>{target} Mode</span>
      <Switch
        checked={theme === THEME.DARK}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
        onChange={() => {
          setTheme(target);
          toggleTheme(target);
        }}
      />
    </div>
  );
};

export default SwitchButton;
