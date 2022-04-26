import React, { useEffect, useState } from 'react'

const Timer = () =>{
    const [timeLeft, setTimeLeft] = useState(1500);
    const [paused, setPaused] = useState(true);
    const [working, setWorking] = useState(true);
    useEffect(() => {
        if (!timeLeft){ 
            if(working){
                //SET TO BREAK TIME LIMIT
                setTimeLeft(300);
            }
            else{
                //SET TO WORKING TIME LIMIT
                setTimeLeft(1500);
            }
            setWorking(!working);
            return;};
        const intervalId = setInterval(() => {
            if(!paused){
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft, paused, working]);
    
    const timeToString = (timeLeft) =>{
        let value = "";
        const minutes = Math.floor((timeLeft)/60);
        const seconds = Math.floor((timeLeft-(minutes*60)));
        value = ( (minutes<10)?("0"):("") ) + minutes + ":" +( (seconds<10)?("0"):("") )+ seconds;
        return value;
    }
    const pauseHandler = (e) =>{
       e.preventDefault();
       setPaused(!paused);
    }
    const resetHandler = (e) =>{
       e.preventDefault();
       setTimeLeft(1500);
       setPaused(true);
       setWorking(true);
    }
    const workingHandler = (e) =>{
        e.preventDefault();
        //If working set timeleft to 5 mins
        if(working){
            setTimeLeft(300);
        }
        //Else set time left to 25 minutes
        else{
            setTimeLeft(1500)
        }
        //Set to opposite working value and set paused to true
        setWorking(!working);
        setPaused(true);
    }
    return (
        <div className="timer w-75 mx-auto">
            <h1 className={(working)?("working"):("break")}>{(working)?("WORKING"):("BREAK")}</h1>
            <div>{timeToString(timeLeft)}</div>
            <button onClick ={pauseHandler}>
               {(paused)?("START"):("STOP")}
            </button>
            <button onClick ={resetHandler}>
               RESET
            </button>
            <button onClick={workingHandler}>
                {(working)?("Break"):("Working")}
            </button>
        </div>
    )
};
export default Timer;