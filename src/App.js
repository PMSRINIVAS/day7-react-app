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
    <div>
      <h1>Working with the forms</h1>

      <div>
        <input
          type="text"
          value={newtodo}
          onChange={updateTodo}
          placeholder="ENTER YOUR TASK"
        />
        <input type="button" value="Add Todo" onClick={addTodo} />
      </div>

      {todoList.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      {todoList.length == 0 && <div>No Todo List</div>}
    </div>
  );
}

export default App;
