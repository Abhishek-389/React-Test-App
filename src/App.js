import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import AboutPage from "./AboutPage";
import Indexpage from "./IndexPage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import NotFoundPage from "./NotFoundPage";
import Blog from "./Blog";
import "./App.css";
function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Indexpage} />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/services" component={ServicesPage} exact />
        <Route path="/blog" render={() => <Blog name="Harry" />} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
