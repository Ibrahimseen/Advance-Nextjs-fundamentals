import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [card, setcard] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setcard(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {card.slice(0, 3).map((e) => {
          return (
            <div key={e.id} className="card">
              {e.title}
              <p> {e.body}</p>
              <span> {e.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
