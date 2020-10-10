import React from "react";
import { useParams } from "react-router-dom";

function Blog(props) {
  const { writer, date } = useParams();
  return (
    <div>
      <h1>
        This is the blog of {writer} on {date}
      </h1>
    </div>
  );
}

export default Blog;
