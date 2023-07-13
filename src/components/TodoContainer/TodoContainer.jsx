import TodoItem from "../TodoItem/TodoItem";
import "./TodoContainer.css";

function TodoContainer(props) {
  return (
    <div className="wrapper">
      {props.todosArr.map((el) => (
        <TodoItem
          title={el.title}
          id={el.id}
          status={el.status}
          deleteTodo={props.deleteTodo}
          handleCheckboxChange={props.handleCheckboxChange}
          editSave={props.editSave}
        />
      ))}
    </div>
  );
}
export default TodoContainer;
