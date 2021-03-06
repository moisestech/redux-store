import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "../List";

// async action creators
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "../../actions/todos.js";

export default function Todos() {
  const input = useRef("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addItem = (e) => {
    e.preventDefault();

    dispatch(
      handleAddTodo(input.current.value, () => (input.current.value = ""))
    );
  };

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    dispatch(handleToggleTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={input} className="input" />
      <button onClick={addItem}>Add Todo</button>

      <List toggle={toggleItem} items={todos} remove={removeItem} />
    </div>
  );
}
