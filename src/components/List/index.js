import React from "react";
import PropTypes from "prop-types";

function List({ items, toggle, remove, complete = false }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
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
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  complete: PropTypes.func,
};
