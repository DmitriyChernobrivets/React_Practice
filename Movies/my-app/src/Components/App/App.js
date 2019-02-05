import React from "react";
import styles from "./App.css";
import Film_INFO from "../pages/FILMINFO/Film.info";
import Watchlist from "../../Components/pages/WATCHLIST/watchlist";
import Home_Page from "../pages/HOME/index";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/navigation";
import ErrorPage from "../pages/404/404";
import Autorization from "../pages/REGISTRATION/authorization";

const App = () => (
  <div className={styles.App}>
    <Navigation />

    <Switch>
      <Route exact path="/" component={Home_Page} />
      <Route path="/watchlist" component={Watchlist} />
      <Route path="/authorisation" component={Autorization} />
      <Route path="/:filmId" component={Film_INFO} />
      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default App;
