import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //ARRAY DESTRUCTED
  let [list, setList] = useState([]);

  //1.
  let [todoText, setToDotext] = useState("");
  let updateToDotext = (e) => {
    // console.log("Update the Input Box", e.target.value);
    setToDotext(e.target.value);
  };

  let addPost = () => {
    console.log("Add Post Method");
    //ARRAY CLONING
    // const newList = ["New To-Do", ...list];
    const newList = [todoText, ...list];
    setList(newList);

    setToDotext("");
  };

  return (
    <div>
      <h2 className="bg-dark text-light p-3">Mini Book</h2>

      <div className="row">
        <div className="col-9">
          {/**
           * 2.Update the value property
           * 3. onChange event
           * */}
          <input
            type="text"
            value={todoText}
            onChange={updateToDotext}
            className="form-control form-control-lg"
          />
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
