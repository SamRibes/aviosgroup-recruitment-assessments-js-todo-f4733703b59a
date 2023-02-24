import React, {Component} from "react";
import Todo from "./Todo";
import TodoControl from "./TodoControl";
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

    const handleInputEnter = (event) => event.code === "Enter" ? handleAddToDo() : null

    const handleDelete = (index) => {
      this.props.deleteTodo(index);
    }
    
    const handleClearTodos = () => {
      if(todos.length > 0) this.props.clearTodos();
    }

    return (
      <>
        <TodoControl
          inputValue={this.state.inputValue}
          onInputChange={handleInputChange}
          onClearTodos={handleClearTodos}
          onAddToDo={handleAddToDo}
          onInputEnter={handleInputEnter}
        />
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