import React from 'react'
import './TodoListItem.css'
interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li className="flex mb-4 items-center">
            <label
            className = {todo.complete ? "w-full line-through text-green " : "w-full text-gray"}
            >
                <input className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green" type="checkbox" checked={todo.complete} onChange={ ()=> toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>
    )
}