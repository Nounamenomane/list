import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoContainer.css";

function TodoContainer() {
  const todosArr = useSelector((state) => state.todos);

  return (
    <div className="wrapper">
      {todosArr.length ? (
        todosArr.map((el) => (
          <TodoItem
            key={el.id}
            title={el.title}
            id={el.id}
            status={el.status}
          />
        ))
      ) : (
        <h1>Пока нет задач</h1>
      )}
    </div>
  );
}
export default TodoContainer;
