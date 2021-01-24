import React, { useState} from 'react';
import {v4 as uuid} from "uuid";


function TodoForm({addTodo}){
    const [todo, setTodo] = useState({
        id :  "",
        task : "",
        completed : false
    });

    function handleInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()})
            setTodo({...todo, task:""});
        }
    }

    return(
            <form onSubmit={handleSubmit}>
                <input
                name = "task"
                type = "text"
                autoComplete="off"
                placeholder= "O que temos para hoje?"
                value = {todo.task}
                onChange={handleInputChange}/>
                <button>Adicionar</button>
            </form>
    )
}

export default TodoForm;
