import React from 'react';

//IMPORT COMPONENTS
import Todo from "./Todo";

const TodoList = ( {todos, setTodos,status} ) =>{
  //console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo,index) => (
          <Todo 
          setTodos = {setTodos}
          todos = {todos}
          key={index} 
          index={index}
          text={todo.text}
          todo={todo}
          status={status}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;