import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [num, setNum] = useState(25);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  }, [num]);
  return (
    <>
      <h1>You choosed {num}</h1>
      <h3>
        Name:<span style={{ color: "red" }}>{name}</span>
      </h3>
      <h3>
        Moves:<span style={{ color: "red" }}>{moves}</span>
      </h3>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </>
  );
}

export default App;
