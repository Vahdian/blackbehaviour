import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "../../pages/landingPage/LandingPage";
import MainPage from "../../pages/mainPage/MainPage";
import Menu from "../../shared/Menu/Menu";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/main">
          <Menu></Menu>
          <MainPage></MainPage>
        </Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </div>
  );
}
