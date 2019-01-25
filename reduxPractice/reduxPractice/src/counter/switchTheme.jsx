import React from "react";
import { connect } from "react-redux";
import { switchTheme } from "../store/actions/switchTheme";
import { getThemeColor } from "../store/reducers/switchTheme";

const SwitchTheme = ({ switchTheme, themeColor }) => (
  <div style={{ backgroundColor: themeColor }}>
    <button onClick={switchTheme}>SWITCH</button>
  </div>
);

const mstp = state => ({ themeColor: getThemeColor(state) });
const rstp = { switchTheme };

export default connect(
  mstp,
  rstp
)(SwitchTheme);
