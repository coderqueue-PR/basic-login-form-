import React, { useState } from 'react'; 

const UseStateArray = () => {

    const bioData = [
        {
            id : 0 , name : "Pranaya" , age : 21
        },
        {
            id : 1 , name : "harish"   , age : 23  
        }
    ]

    const [myArray , setmyArray]  =   useState(bioData);

    const clearArray = () =>{
        setmyArray([]);
    }

    const removeElem = (id) => {
      const myNewArray = myArray.filter((currElem)=>{
        return currElem.id != id;
      })
      setmyArray(myNewArray); 
    }
  
  return (
    <>
      {
        myArray.map((currElm) => {return( 
          <h1 className="h1Style" key={currElm.id}>Name: 
          {currElm.name} , Age : 
          {currElm.age}
          <button className="btnInner" onClick={() => removeElem(currElm.id)}>Remove</button>
          </h1>
        )
      } )
      }
      <button className="btn" onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray
