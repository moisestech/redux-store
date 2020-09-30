import React from "react";
import { connect } from "react-redux";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import List from "./List";

// async action creators
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "../../actions/todos";
import { render } from "react-dom";

function Todos({ dispatch, todos }) {
  const addItem = (e) => {
    e.preventDefault();

    dispatch(handleAddTodo(this.input.value, () => (this.input.value = "")));
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
      <input
        type="text"
        placeholder="Add Todo"
        ref={(input) => (this.input = input)}
      />
      <button onClick={addItem}>Add Todo</button>

      <List toggle={toggleItem} items={todos} remove={removeItem} />
    </div>
  );
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);

Todos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
