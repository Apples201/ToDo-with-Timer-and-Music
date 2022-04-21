import React, { useEffect, useState } from 'react';

const Todo = ({text, todo, todos, setTodos,index,status}) =>{
    //EVENTS CODE
    const [displayed, setDisplayed] = useState(false);
    useEffect(() => {
        if(status==="all"){
            setDisplayed(true);
        }
        else if(todo.completed && status==="completed"){
            setDisplayed(true);
        }
        else if(!todo.completed && status==="uncompleted"){
            setDisplayed(true);
        }else{
            setDisplayed(false);
        }
    }, [status,todo.completed])
    
    const deleteHandler = (i) => {
        console.log(i)
        let tempTodos = [...todos];
        tempTodos.splice(i,1);
        setTodos(tempTodos);
    };
    const completeHandler = (i) => {
        let tempTodos = [...todos];
        tempTodos[i].completed = !tempTodos[i].completed;
        setTodos(tempTodos);
    };

    return (
        <div className={"todo " + ((displayed)?(""):("todo-hidden"))}>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={()=>completeHandler(index)} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={()=>deleteHandler(index)} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;