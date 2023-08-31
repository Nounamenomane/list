import React from "react";
import css from "./Filter.Todo.module.css";

function FilterTodo(props) {
  return (
    <div className={css.wrapper}>
      <div>
        <input
          type="checkbox"
          checked={props.showAll}
          onChange={props.handleShowAll}
        />
        <label htmlFor="">All</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={props.showComplete}
          onChange={props.handleShowComplete}
        />
        <label htmlFor="">Complete</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={props.showProgress}
          onChange={props.handleShowProgress}
        />
        <label htmlFor="">Progress</label>
      </div>
    </div>
  );
}

export default FilterTodo;
