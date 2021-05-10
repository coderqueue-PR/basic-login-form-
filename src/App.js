import React, { useState } from 'react'
import './App.css';
// import ShortCirEval from './component/ShortCirEval';
// import UseStateArray from './component/UseStateArray';
// import UseStateArray from './component/UseStateArray';
// import UseStateDot from './component/UseStateDot';
import LoginBasic from './component/forms/loginbasic';

const App = () => {


  // const  [myName , setmyName] = useState('React Hooks Special');

  // const changeName = () =>{
  //   let val = myName;
  //   val === 'React Hooks Special' ? setmyName(' Pranaya Rath React2021 Special') : setmyName('React Hooks Special');
    
  // }

  return (
    <div>
     <LoginBasic />
    </div>
  )
}

export default App
