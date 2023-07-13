import { useState } from "react";
import "./createTodo.css";

function CreateTodo(props) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // alert(value)
    // setValue('Hello world')
    props.addTodo(value);
    setValue("");
    // alert(e.target[0].value);
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
