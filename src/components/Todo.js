import React from 'react';
import {MdCheckCircle} from "react-icons/md";

function Todo({todo, completeTask}){
    function handleComplete(){
        completeTask(todo.id)
    }

    return(
        <div className="item">
            <li style={{textDecoration: todo.completed ? "line-through" : null}}>{todo.task}
            <span>
                <MdCheckCircle 
                className="checkicon" 
                onClick={handleComplete} 
                style={{color: todo.completed ? "gray" : null}}/></span>
            </li>
        </div>
    )
}

export default Todo;