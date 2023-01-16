import './App.css';
import Classcomponent from './Classcomponent';
import Functional from './Functional';
import React,{useState} from 'react';
const App=()=>{
  const [show , setshow]=useState(false)
  const [no , setshows]=useState(false)
  const btn2click=()=>{
    setshow(!show)
  }
  const btn1click=()=>{
    setshows(!no)
  }
 
  return(
    <div className="container">
      <div className="Box1"><h1>Styling Using Function And Class Component</h1></div>
      <div >
        <button className="Box3" onClick={btn1click} id="btn1">To see Styling in function component</button>
        <button  className="Box2" onClick={btn2click} id="btn2">To see styling in class component</button>
      </div>
      
        {show && <Functional/>} {no && <Classcomponent/>}
      </div> 
    
  )
}

export default App;
 
