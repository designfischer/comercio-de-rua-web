import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthPage from "./pages/Auth/Auth";
import Products from "./pages/Products/Products";

import Nav from "./components/Nav/nav";

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="main-content">
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/products" component={Products} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Routes;
