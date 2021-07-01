import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //let tempCounter=100;
  //This is a method.
  //This method is special; Since it starts with USE prefix.
  //this special method is also known as HOOKS in React
  let output = useState(100);
  console.log(output);

  //DESTRUCTURING IS HAPPENNING
  let [counter, setCounter] = useState(200);
  let increment = () => {
    setCounter(counter + 100);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <h1>{counter}</h1>
      <h1>
        <button onClick={increment}>INCREMENT</button>
      </h1>
      <h1>🔥</h1>
    </div>
  );
}

export default App;
