import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

function Blog(props) {
  const { writer, date } = useParams();
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <h1>
        This is the blog of {writer} on {date}
      </h1>
      <h3>Your location is {location.pathname}</h3>
      <button onClick={() => history.goBack()}>Go back</button>
      <button onClick={() => history.push("/")}>Go Home</button>
      {location.pathname === "/blog/Abhi/200"
        ? alert("You are the boss")
        : null}
    </div>
  );
}

export default Blog;
