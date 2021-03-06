import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink exact activeStyle={{ textDecoration: "underline" }} to="/">
        Home
      </NavLink>
      <NavLink exact activeStyle={{ textDecoration: "underline" }} to="/about">
        About
      </NavLink>
      <NavLink
        exact
        activeStyle={{ textDecoration: "underline" }}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink exact activeStyle={{ textDecoration: "underline" }} to="/search">
        Search
      </NavLink>
      <NavLink
        exact
        activeStyle={{ textDecoration: "underline" }}
        to="/blog/Abhi/200"
      >
        Blog
      </NavLink>
    </header>
  );
}

export default Header;
