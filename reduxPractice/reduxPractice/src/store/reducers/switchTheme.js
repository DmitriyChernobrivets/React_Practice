import { SWITCH_THEME } from "../actions/types";

const COLORS = ["#ffffff", "#757575", "#03A9F4", "#009688"];

export const getThemeColor = state => COLORS[state.switchTheme];

const initialState = 0;

export default function switchReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return (state + 1) % COLORS.length;
    default:
      return state;
  }
}
