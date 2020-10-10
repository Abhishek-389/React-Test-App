import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `You clicked me ${value}`;
  }, [value]);
  return <button onClick={() => setValue(value + 1)}>Click me {value}</button>;
}

export default App;
