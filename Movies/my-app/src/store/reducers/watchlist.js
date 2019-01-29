const watchlistReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "WATCHLIST_ADD":
      return state.some(item => item.id === payload.id)
        ? state
        : [...state, payload];
    case "WATCHLIST_REMOVE":
      return [...state.filter(movie => movie.id !== payload)];

    default:
      return state;
  }
};
export default watchlistReducer;
