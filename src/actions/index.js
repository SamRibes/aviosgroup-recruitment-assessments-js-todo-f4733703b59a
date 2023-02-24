import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function addTodo(todo) {
  return function(dispatch) {
    return axios.post("http://localhost:9091/api/todo", todo).then(() => {
      dispatch(fetchTodos());
    });
  };
}

export function deleteTodo(index) {
  return function(dispatch) {
    return axios.delete(`http://localhost:9091/api/todo/${index}`).then(() => {
      dispatch(fetchTodos());
    });
  };
}

export function clearTodos(index) {
  return function(dispatch) {
    return axios.post(`http://localhost:9091/api/todo/clear`).then(() => {
      dispatch(fetchTodos());
    });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}