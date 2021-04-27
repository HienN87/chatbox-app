import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Connexion from "./components/Connexion";
import NotFound from "./components/NotFound";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Connexion}></Route>
      <Route exact path="/pseudo/:pseudo" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
