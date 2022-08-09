import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, onDelete, onEdit,check,onClear }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            onDelete={onDelete}
            onEdit={onEdit}
            todo={todo}
            check = {check}
            onClear =  {onClear}
           
          />
        );
      })}
    </>
  );
};

export default TodoList;
