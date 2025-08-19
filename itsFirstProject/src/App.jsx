import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter]=useState(5);
  //  let counter = 5;
   const addValue=()=>{
    console.log("add value",counter);
    counter = counter+1;
    setCounter(counter+1);

   }
   const removeValue =()=>{
    console.log("remove value",counter)
    counter= counter-1;
       setCounter(counter-1);
   }
  return (
    <>
      <div> 
     <h1>ROHIT CHAUHAN</h1>
     <p>COUNTER:{counter}</p>

     <button onClick={addValue}>ADD = {counter} </button>
     <button onClick={removeValue}>ROMOVE = {counter}</button>
     
     
     
   </div>
   {counter}  </>  
  )
}

export default App
