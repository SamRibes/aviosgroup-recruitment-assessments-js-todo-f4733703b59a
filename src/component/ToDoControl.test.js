import {render, screen} from '@testing-library/react'
import { Provider } from "react-redux";
import store from "../store";
import TodoControl from './TodoControl';

it('evrything is visible', () => {
  const inputText = "some text here"
  render(
    <Provider store={store}>
      <TodoControl
        inputValue={inputText}
        onInputChange={() => {}}
        onClearTodos={() => {}}
        onAddToDo={() => {}}
        onInputEnter={() => {}}
      />
    </Provider>
  )
  expect(screen.getByText("Clear Todos")).toBeTruthy();
  expect(screen.getByText("Add Todo")).toBeTruthy();
  expect(screen.getByDisplayValue(inputText)).toBeTruthy();
});