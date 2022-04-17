import React, {useState, useEffect} from "react";
import './App.css';

//IMPORT COMPONENTS TIME
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //STATE CONSTANTS
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE USEEFFECT
  useEffect(() => {
    getLocalTodos();
    console.log('i fire once');
  }, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  //FUNCTIONS AND EVENTS
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //SAVE TO LOCALSTORAGE
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
     <header>
      <h1>ToDo List</h1>
     </header>
     <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}
    />
     <TodoList
     setTodos = {setTodos}
     todos ={todos}
     filteredTodos={filteredTodos}
     />
    </div>
  );
}

export default App;
