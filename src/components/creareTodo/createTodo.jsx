import { useState } from "react";
import "./createTodo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux";

function CreateTodo() {
  const [value, setValue] = useState("");
  const disptch = useDispatch()

  const submit = (e) => {
    e.preventDefault();
    disptch(addTodo(value))
    setValue("");
  };

  const hadleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={submit} className="create">
      <input
        value={value}
        onChange={hadleChange}
        className="text"
        type="text"
        placeholder="Enter some todo"
      />
      <input className="submit" type="submit" value="+Add" />
    </form>
  );
}
export default CreateTodo;
