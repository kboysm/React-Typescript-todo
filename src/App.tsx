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
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
    </React.Fragment>
  )
  
}

export default App;
