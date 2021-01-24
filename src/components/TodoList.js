import React from 'react';
import Todo from "./Todo";

function TodoList({todos, completeTask, filteredTodos}){

    return(
        <ol>
            {filteredTodos.map(todo=>(
                <Todo key={todo.id} todo = {todo} completeTask={completeTask}/>
            ))}
        </ol>
    );
}

export default TodoList;