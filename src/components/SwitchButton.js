import React from "react";
import { Switch } from "antd";
import useTheme, { THEME } from "../hooks/useTheme";

const SwitchButton = () => {
  const { theme, setTheme } = useTheme();

  const target = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

  return (
      <Switch
        checked={theme === THEME.DARK}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
        onChange={() => setTheme(target)}
      />
  );
};

export default SwitchButton;
