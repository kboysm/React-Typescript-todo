import React from 'react';
import { TodoListItem } from './TodoListItem'
// import { Todo } from './types';


const todos: Array<Todo> = [
  { text: "리액트 기본 복습", complete: false},
  { text: "타입스크립트 생각", complete: true}
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </React.Fragment>
  )
  
}

export default App;
