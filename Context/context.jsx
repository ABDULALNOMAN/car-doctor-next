"use client"

const { createContext } = require("react");
import React from 'react' 


export const callContext = createContext()
const context = ({children}) => {
    const value = {name:"noman"}
    return( 
    <callContext.Provider value={value}>
        {children}
    </callContext.Provider>
    )
}

export default context
