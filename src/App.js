import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    function handleFilter(){
    setFilteredTodos(todos.filter(todo=>todo.task.toLowerCase().includes(search.toLowerCase())))
  }
    handleFilter();
  }, [todos, search]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function completeTask(id){
    setTodos(
      todos.map(todo=>{
        if(todo.id === id){
          return{...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  return (
    <div div id = "todo-form" className="App">
      <h1>Todolist React</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos = {todos} completeTask={completeTask} filteredTodos={filteredTodos}/>
        <div className="Filter-Count" style={{display:"flex"}}>
            <div className="counter">Completas: {(filteredTodos.filter(todo=>todo.completed)).length}/{filteredTodos.length}</div>
            <input
            name="filter"
            type="text"
            placeholder="Filtre suas tarefas"
            onChange={e => {setSearch(e.target.value)}}
            ></input>
        </div>
    </div>
  
  );
}

export default App;
