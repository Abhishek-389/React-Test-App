import React from "react";

function SearchResult({ query }) {
  return (
    <div>
      <h1>Result:</h1>
      <img
        style={{}}
        src={`https://source.unsplash.com/600x400/?${query}`}
        alt=""
      />
    </div>
  );
}

export default SearchResult;
