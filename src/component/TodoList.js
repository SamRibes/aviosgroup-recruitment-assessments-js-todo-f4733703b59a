import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos, addTodo, deleteTodo, clearTodos } from "../actions";
import {connect} from "react-redux";

class TodoList extends Component {
  state = {
    inputValue: ""
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {todos} = this.props.data;

    const handleInputChange = (event) => {
      this.setState({inputValue: event.target.value})
    }

    const handleAddToDo = () => {
      if(this.state.inputValue.length > 0) {
        this.props.addTodo({task: this.state.inputValue});
        this.setState({inputValue: ""})
      }
    }

    const handleAddToDoOnEnter = (event) => event.code === "Enter" ? handleAddToDo() : null

    const handleDelete = (index) => {
      this.props.deleteTodo(index);
    }
    
    const handleClearTodos = () => {
      if(todos.length > 0) this.props.clearTodos();
    }

    return (
      <>
        <button onClick={handleClearTodos}>Clear Todos</button>
        <div className="add-todo">
          <button onClick={handleAddToDo}>Add Todo</button>
          <input type="text" value={this.state.inputValue} onChange={handleInputChange} 
            onKeyUp={handleAddToDoOnEnter}
          />
        </div>
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
              return (
                <div key={`todo-${index}`} >
                  <Todo todo={todo.task} onDelete={() => handleDelete(index)}/>
                </div>
              )
            })


            : "No todos, yay!"}
        </ul> 
      </>
    );
  }
}

const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchTodos,
    addTodo,
    deleteTodo,
    clearTodos
  }
)(TodoList);