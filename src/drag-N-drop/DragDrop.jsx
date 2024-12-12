import { useState } from "react";
import "./style.css";
const DragDrop = () => {
  const [todo, setTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [draggedTodo, setDraggedTodo] = useState(null);
console.log("todo outside",todo)
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10000);
  }
  function onDrop(currentStatus) {
    todo.forEach((item) => {
      if (item.id === draggedTodo.id) {
        item.status = currentStatus;
      }
    });
      setTodo([...todo]);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button
        onClick={() =>
          setTodo([
            ...todo,
            { todo: inputText, id: generateRandomNumber(), status: "TODO" },
          ])
        }
      >
        Submit
      </button>
      <div>
        <div className="todo-title">
          <div
            onDrop={() => {
              console.log("dropped",)
              onDrop("TODO");
            }}
            onDragOver={(e) => e.preventDefault()}

          >
            <div>TODO</div>
            {todo.map(
              (item) =>
                item.status === "TODO" && (
                  <div
                    draggable
                    onDrag={() => {
                      setDraggedTodo(item);
                    }}
                    key={item.id}
                  >
                    {item.todo}
                  </div>
                )
            )}
          </div>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              onDrop("DOING");
            }}
          >
            <div>DOING</div>
            {todo.map(
              (item) =>
                item.status === "DOING" && (
                  <div
                    draggable
                    onDrag={() => {
                      setDraggedTodo(item);
                    }}
                    key={item.id}
                  >
                    {item.todo}
                  </div>
                )
            )}
          </div>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              onDrop("DONE");
            }}
          >
            <div>DONE</div>
            {todo.map(
              (item) =>
                item.status === "DONE" && (
                  <div
                    draggable
                    onDrag={() => {
                      setDraggedTodo(item);
                    }}
                    key={item.id}
                  >
                    {item.todo}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
