import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState(0);

  useEffect(() => {
    alert("Count is loaded");
    setcolor(color + 1);
  }, [count]);

  return (
    <>
      <Navbar color={"Navy" + "blue" + color} />
      <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </>
  );
}

export default App;
