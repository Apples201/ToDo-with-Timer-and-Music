import React from 'react';

//IMPORT COMPONENTS
import Todo from "./Todo";

const TodoList = ( {todos, setTodos, filteredTodos} ) =>{
  //console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <Todo 
          setTodos = {setTodos}
          todos = {todos}
          key={index} 
          text={todo.text}
          todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;