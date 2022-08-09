import React, { useState, useReducer, useEffect } from "react";
import styles from "./Todo.module.css";
import reducer from "../redux/reducer";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";

const Todo = () => {
  const [val, setVal] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleClick = (e) => {
    e.preventDefault();
    setVal("");
  };

  return (
    <form onSubmit={handleClick} className={styles.container}>
      <div className={styles.dFlex}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className={styles.button}>
          <button
            onClick={(text) => {
              dispatch({ type: "Add", payload: { text: val } });
            }}
          >
            Add
          </button>
        </div>
      </div>
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          dispatch({
            type: "Delete",
            payload: {
              id: todo.id,
            },
          });
        }}
        check={(id) => {
          dispatch({
            type: "Checked",
            payload: {
              id: id,
            },
          });
        }}
      />

      <TodoFooter
      todos = {todos}
        onClear={(todo) => {
          dispatch({
            type: "ClearAll",
            payload: {
              checked: todo.checked,
            },
          });
        }}
      />
    </form>
  );
};

export default Todo;
