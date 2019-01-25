const initialState = "";

export const selectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_SELECT_VALUE":
      return payload;

    default:
      return state;
  }
};
