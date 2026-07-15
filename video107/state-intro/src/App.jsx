import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <div>i am a {count}</div>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        {count}
      </button>
    </>
  );
}

export default App;
