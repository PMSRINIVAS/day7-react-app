import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [newtodo, setNewtodo] = useState();
  let [todoList, setTodoList] = useState([]);

  const updateTodo = (e) => {
    console.log(e.target);
    setNewtodo(e.target.value);
  };

  const addTodo = () => {
    console.log("I will add the ToDo");
    const newlist = [newtodo, ...todoList];
    setTodoList(newlist);

    setNewtodo("");
  };

  return (
    <div className="bg-secondary">
      <h1></h1>
      <h1 className="bg-success text-dark p-3">
        {" "}
        📃 Working with the forms 📝
      </h1>

      <div className="row">
        <div className="col-9">
          <input
            type="text"
            value={newtodo}
            onChange={updateTodo}
            placeholder="ENTER YOUR TASK 🖊️"
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-3">
          <input
            type="button"
            className="btn btn-lg btn-primary text-white"
            value="Add Todo"
            onClick={addTodo}
          />
        </div>
      </div>

      {todoList.map((item, index) => (
        <h3 key={index} className="bg-danger text-white p-3 my-2">
          ✍️{item}
        </h3>
      ))}

      {todoList.length == 0 && (
        <div className="alert alert-success my-1">No Todo List ☮️</div>
      )}
    </div>
  );
}

export default App;
