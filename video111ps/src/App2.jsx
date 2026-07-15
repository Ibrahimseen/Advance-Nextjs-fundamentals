import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [url] = useState("https://jsonplaceholder.typicode.com/posts");
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch(url).then((res) => res.json()).then((result)=> {
      console.log(result)
      setdata(result)
    })
  }, [])
  
  return (
    <>
    <div className="container">
      {data.slice(0,1).map((result)=> {
       return <Card  key={result.id} id={result.id} title={result.title} body={result.body}  />
      })}
    </div>
    </>
  );
}

export default App;
