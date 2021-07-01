import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //ARRAY DESTRUCTED
  let [list, setList] = useState([]);

  let addPost = () => {
    console.log("Add Post Method");
    //ARRAY CLONING
    const newList = ["New To-Do", ...list];
    setList(newList);
  };

  return (
    <div>
      <h2 className="bg-dark text-light p-3">Mini Book</h2>

      <div className="row">
        <div className="col-9">
          <input type="text" className="form-control form-control-lg" />
        </div>

        <div className="col-3">
          <input
            type="button"
            className="btn btn-lg btn-primary"
            value="Add To-Do"
            onClick={addPost}
          />
        </div>
      </div>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary my-2">
          {item}
        </div>
      ))}

      {/** Conditional Logic */}
      {list.length == 0 && (
        <div className="alert alert-success my-1">You have no Pending Task</div>
      )}
    </div>
  );
}

export default App;
