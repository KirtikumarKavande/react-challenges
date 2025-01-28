import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");

  function handlePendingState() {
    setStatus("pending");
  }

  function handleCompletedState() {
    setStatus("completed");
  }

  function handleAllState() {
    setStatus("all");
  }

  console.log("todo",todo)
  const filtered = todo.filter((item) => {
    if (status === "pending") {
      return item.status === "pending";
    }
    if (status === "completed") {
      return item.status === "completed";
    }
    return true; 
  });

  return (
    <div>
      <Form setTodo={setTodo} todo={todo} />
      {filtered.map((item) => (
        <TodoList
          key={item.id}
          setTodo={setTodo}
          name={item.title}
          id={item.id}
          status={item.status}
          todo={todo}
        />
      ))}
      <button onClick={handleAllState}>All</button>
      <button onClick={handlePendingState}>Pending</button>
      <button onClick={handleCompletedState}>Completed</button>
    </div>
  );
};

export default Todos;