import { combineReducers } from "redux";
import moviesReducer from "./movies";
import watchlistReducer from "./watchlist";

export const rootReducer = combineReducers({
  movie: moviesReducer,
  watchlist: watchlistReducer
});
