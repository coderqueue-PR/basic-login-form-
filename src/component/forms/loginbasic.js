import React, { useState } from 'react'

const LoginBasic = () => {
    const [email , setEmail] =  useState("");
    const [password , setPassword] =  useState("");
    const [newData , setNewData] =  useState([]);

const submitForm = (e) =>{
    e.preventDefault();
    if(email && password){
        const newEntry = {id: new Date().getTime().toString(), email , password}
        setNewData([...newData , newEntry]);
        setEmail("");
        setPassword("");
    }else{
        alert("form is empty")
    }
  
}  
    
  return (
   <>
   <form action="" onSubmit={submitForm}>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" autoComplete="off"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" autoComplete="off"
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
        />
    </div>

    <button type="submit">Login</button>
   </form>
   <div>
       {
           newData.map((curElem) => {
                    const {id , email , password} = curElem;
                return(
                    <div className="showDataStyle" key={curElem.id}>
                        <p>{email}</p>
                        <p>{password}</p>
                    </div>
                )
           })
       }
   </div>

  

   </>
  )
}

export default LoginBasic
