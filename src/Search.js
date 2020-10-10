import React from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";

function Search() {
  const [input, setInput] = useState("");
  return (
    <>
      <div
        style={{
          width: "50%",
          height: "auto",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter your query"
          style={{ margin: "30px o", padding: "5px 10px", borderRadius: "5px" }}
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
      </div>

      {input.length !== 0 ? <SearchResult query={input} /> : null}
    </>
  );
}

export default Search;
