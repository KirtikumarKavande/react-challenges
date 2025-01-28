const TodoList = ({ name, todo, setTodo, id,status }) => {
  function handleChecked(e) {
    console.log(e.target.checked);
    let updated = [];
    if (e.target.checked) {
      updated = todo.map((item) => {
        if (item.id === id) {
          item.status = "completed";
        }
        return item;
      });
    } else {
      updated = todo.map((item) => {
        if (item.id === id) {
          item.status = "pending";
        }
        return item;
      });
    }

    setTodo(updated);
  }
  return (
    <div>
      <span>{name}</span>

      <input type="checkbox" name="" id="" checked={status==="completed"} onChange={handleChecked} />
    </div>
  );
};

export default TodoList;
