import React from "react";
import PropTypes from "prop-types";

export default function List({ items, toggle, remove }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          <span
            onClick={() => toggle && toggle(item.id)}
            style={{ textDecoration: item.complete ? "line-through" : "none" }}
          >
            {item.name}
          </span>
          <button onClick={() => remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggle: PropTypes.func,
  remove: PropTypes.func.isRequired,
};
