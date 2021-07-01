import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //Its recommended for inline styling
  let mystyle = { fontSize: 32, backgroundColor: "red" };

  return (
    <div>
      <h1>External Styling</h1>
      <p className="primary">lorem sash dvhnds AJBAB</p>

      <h1>Inline Styling in React</h1>
      <p style={{ fontSize: 32, color: "tomato" }}>
        lorem gsjamba xaghjsa xaghsnb --//this approach is not
        recommended(inline css styling.)
      </p>
      {/**Style Using the Object */}
      <p style={mystyle}>lorem gsjamba xaghjsa xaghsnb </p>
    </div>
  );
}

export default App;
