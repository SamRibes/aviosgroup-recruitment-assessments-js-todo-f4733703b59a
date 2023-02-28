import {render, screen} from '@testing-library/react'
import { Provider } from "react-redux";
import store from "../store";
import Todo from './Todo';

it('displays correct text', () => {
  const expectedString = "some text here"
  render(
    <Provider store={store}>
      <Todo todo={expectedString}/>
    </Provider>
  )
  expect(screen.getByText(expectedString)).toBeTruthy();
});

it('displays delete button', () => {
  const expectedString = "some text here"
  render(
    <Provider store={store}>
      <Todo todo={expectedString} onDelete={()=>{}}/>
    </Provider>
  )
  expect(screen.getByRole('button')).toBeTruthy();
});