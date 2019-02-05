import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navigation.css";

const Navigation = () => (
  <ul>
    <li>
      <NavLink exact to="/" activeClassName={style.nav_active}>
        Home
      </NavLink>
      <NavLink to="/watchlist" activeClassName={style.nav_active}>
        Watchlist
      </NavLink>
      <NavLink to="/authorisation" activeClassName={style.nav_active}>
        Authirization
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
