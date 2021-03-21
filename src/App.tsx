import React , { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
// import { Todo } from './types';


const initialTodos: Array<Todo> = [
  { text: "리액트 기본 복습", complete: false},
  { text: "타입스크립트 생각", complete: true}
];

const App: React.FC = () => {
  const [todos , setTodos] = useState( initialTodos )
  const toggleTodo: ToggleTodo =  selectedTodo => {
    const newTodos = todos.map( todo => {
      if( todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo , complete: false}])
  }

  return (
    <React.Fragment>
     <TodoList todos={todos} toggleTodo={toggleTodo} />
     <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  )
  
}

export default App;
