import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>I am the home page</h1>
        </Route>
        <Route path="/about" exact>
          <h1>I am the about page</h1>
        </Route>
        <Route path="/contact" exact>
          <h1>I am the contact page</h1>
        </Route>
        <Route path="/services" exact>
          <h1>I am the service page</h1>
        </Route>
        <Route>
          <h1>Oppps</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
