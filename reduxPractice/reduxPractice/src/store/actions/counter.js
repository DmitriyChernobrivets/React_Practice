import { INCREMENT, DECREMENT } from "./types";

export const increment = val => ({
  type: INCREMENT,
  payload: val
});

export const decrement = val => ({
  type: DECREMENT,
  payload: val
});
