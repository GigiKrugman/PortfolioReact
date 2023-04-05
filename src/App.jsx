import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar />
    </h1>
  );
}

export default App;
