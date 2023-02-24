
import React from "react";
import { connect } from "react-redux";

const TodoControl = ({ inputValue, onInputChange, onClearTodos, onAddToDo, onInputEnter}) => {
  return (
    <>
      {onClearTodos && 
        <button onClick={onClearTodos}>Clear Todos</button>
      }
      <div className="add-todo">
        <button onClick={onAddToDo}>Add Todo</button>
        <input type="text" value={inputValue} onChange={onInputChange} 
          onKeyUp={onInputEnter || null}
        />
      </div>
    </>
  )
}


export default connect(
  null
)(TodoControl);