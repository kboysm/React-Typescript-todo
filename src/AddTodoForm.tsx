import React, {ChangeEvent, FormEvent, useState} from 'react';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {

    const [newTodo, setNewTodo] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo( newTodo );
        setNewTodo("");
    }
    return (
        <form className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" type="text" value={newTodo} onChange={handleChange}/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit" onClick={handleSubmit} >Add Todo</button>
        </form>
    )
}