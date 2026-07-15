import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Showbtn, setShowbtn] = useState(true);
  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "this is me",
    },
    {
      title: "hey i am second title",
      desc: "this is me second desc",
    },
    {
      title: "hey i am 3rd",
      desc: "this is me  3rd desc",
    },
  ]);
  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //     <div className="todo m-4 border border-1" >
  //       <div className="todo ">{todo.title}</div>
  //       <div className="todo ">{todo.desc}</div>
  //       </div>

  //     </>
  //   );
  // };
  return (
    <>
      {/* { {Showbtn ? (
        <button> showbtn is true</button>   ) : (
        <button> show btn is false</button> )} } */}
      { Showbtn &&  <button> showbtn is true</button>  }
      <div className="m4 border-2px border ">
        <button className="counter" onClick={() => setShowbtn(!Showbtn)}>
          Toggle button
        </button>
      </div>

      {todos.map((todo) => {
       // return <Todo key={todo.title} todo={todo} />;
        return (
          <div key={todo.title} className="todo m-4 border border-1">
            <div className="todo ">{todo.title}</div>
            <div className="todo ">{todo.desc}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
