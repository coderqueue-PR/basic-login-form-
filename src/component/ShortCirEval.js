import React, { useState } from 'react'

const ShortCirEval = () => {
    const [demo , setDemo] =  useState("he");
  return (
    <div>
        <h1 className="h1Style">{"software" || demo}</h1>
        <h1 className="h1Style">{demo && "fullstack"}</h1>
    </div>
  )
}

export default ShortCirEval
