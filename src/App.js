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

  //RUN ONCE USEEFFECT
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  //FUNCTIONS AND EVENTS
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
     status={status}
     />
    </div>
  );
}

export default App;