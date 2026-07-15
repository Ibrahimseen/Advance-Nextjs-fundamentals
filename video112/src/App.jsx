import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setname] = useState("Harry");
  // const [form, setform] = useState({ email: "", phone: "" });
  const [form, setform] = useState({});

  const handleClick = () => {
    alert("I am  Cliked");
  };
  const handleMouseOver = () => {
    alert("I am  MouseOver");
  };
  const onChangehandler = (e) => {
    // setname(e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <>
      {/* <div>
      <button onClick={handleClick}>Click me</button>
      <button className='red' onMouseOver={handleMouseOver}>Click me MouseOver</button>
    </div> */}

      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={onChangehandler}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={onChangehandler}
      />
    </>
  );
}

export default App;
