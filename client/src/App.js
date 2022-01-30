import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./layout/Menu";
import Layout from "./layout/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
