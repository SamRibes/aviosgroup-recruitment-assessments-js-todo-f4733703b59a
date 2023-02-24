import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo, onDelete }) => (
  <li className="todo-item">
    <span className="todo-item__text">
      <button onClick={onDelete}>Delete Item</button>
      {todo}
    </span>
  </li>
);

// export default Todo;
export default connect(
  null
)(Todo);