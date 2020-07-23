import React from "react";
import { Switch } from "antd";
import useTheme, { THEME } from "../hooks/useTheme";

const SwitchButton = () => {
  const { theme, setTheme } = useTheme();

  const target = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

  return (
    <div style={{ display: "inline-block", float: "right", color: "#fff" }}>
      <Switch
        checked={theme === THEME.DARK}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
        onChange={() => setTheme(target)}
      />
    </div>
  );
};

export default SwitchButton;
