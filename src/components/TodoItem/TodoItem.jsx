import { useState } from "react";
import css from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { checkBoxChange, deleteTodo, editTodo } from "../../redux";

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(true);
  const [inpValue, setInpValue] = useState(props.title);
  const disptch = useDispatch();

  const handleCheckboxChange = () => {
    disptch(checkBoxChange(props.id));
  };

  const handleChangeInput = (e) => {
    setInpValue(e.target.value);
  };
  const handleDel = () => {
    disptch(deleteTodo(props.id));
  };

  const handleSave = () => {
    const editedTodo = {
      id: props.id,
      title: inpValue,
    };
    disptch(editTodo(editedTodo));
    setIsEdit(true);
  };

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <label>
          <input
            type="checkbox"
            checked={props.status}
            onChange={handleCheckboxChange}
          />
          <span className={props.status ? css.complete : ""}>
            {props.title}
          </span>
        </label>
      ) : (
        <input
          onChange={handleChangeInput}
          value={inpValue}
          type="text"
          placeholder="Enter"
        />
      )}
      <div className={css.actions}>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
        <button onClick={handleDel}>Del</button>
      </div>
    </div>
  );
}
export default TodoItem;
