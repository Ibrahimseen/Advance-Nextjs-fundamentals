import { useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, Multiply,incrementByAmount } from "./redux/counter/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        {count}
        {/* <button onClick={() => dispatch(increment())}>+</button> */}
        <button onClick={() => dispatch(incrementByAmount(6))}>+</button>
        <button onClick={() => dispatch(Multiply())}>*</button>
      </div>
    </>
  );
}

export default App;
