import { useState } from "react";
import css from "./TodoItem.module.css";

function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(props.status);
  const [isEdit, setIsEdit] = useState(true);
  const [inpValue, setInpValue] = useState(props.title);

  const handleCheckboxChange = () => {
    const newStatus = !isChecked;
    setIsChecked(newStatus);
    props.handleCheckboxChange(props.id);
  };

  const handleChangeInput = (e) => {
    setInpValue(e.target.value);
  };
  const handleDel = () => {
    props.deleteTodo(props.id);
  };

  const handleSave = () => {
    const newTitle = inpValue
     setInpValue(newTitle);
    props.editSave(props.id, newTitle)

    setIsEdit(true);
  };

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className={isChecked ? css.complete : ""}>{props.title}</span>
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
