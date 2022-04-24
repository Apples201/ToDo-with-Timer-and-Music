import React from "react";


const Form = ({inputText, todos, setTodos, setInputText, setStatus}) => {
  //Javascript code and functions
    const inputTextHandler = (e) => {
      //console.log(e.target.value);
      setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text:inputText, completed: false}
      ]);
      setInputText("");
    };
    const statusHandler = (e) => {
      setStatus(e.target.value);
    };

    return (
        <form>
      <input value = {inputText} onChange={inputTextHandler} type="text" className="todo-input w-75" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;