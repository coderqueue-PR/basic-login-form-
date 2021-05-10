import React, { useState } from 'react'

const UseStateDot = () => {

const [myDetails , setmyDetails]  =   useState({name : "Rathababu" , degree: "B.tech" , age:21})

const changeObject = () => {
    setmyDetails({...myDetails , name:'Pranaya Rath Sir' })
}

  return (
    <div>
        <h1 className="h1Style">Name: {myDetails.name} degree: {myDetails.degree} age: {myDetails.age}</h1>
        <button className="btn" onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateDot
 