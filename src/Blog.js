import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Blog(props) {
  const { writer, date } = useParams();
  const location = useLocation();
  return (
    <div>
      <h1>
        This is the blog of {writer} on {date}
      </h1>
      <h3>Your location is {location.pathname}</h3>
      {location.pathname === "/blog/Abhi/200"
        ? alert("You are the boss")
        : null}
    </div>
  );
}

export default Blog;
