import { SWITCH_THEME } from "./types";

export const switchTheme = () => ({
  type: SWITCH_THEME,
  meta: {
    throttle: 1000
  }
});
