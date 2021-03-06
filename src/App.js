import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import AboutPage from "./AboutPage";
import Indexpage from "./IndexPage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import NotFoundPage from "./NotFoundPage";
import Blog from "./Blog";
import Search from "./Search";
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
        <Route path="/blog/:writer/:date" component={Blog} exact />
        <Route path="/search" component={Search} exact />
        <Redirect to="/" />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
