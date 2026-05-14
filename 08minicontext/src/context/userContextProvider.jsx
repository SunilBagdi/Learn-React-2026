import React, { useState } from 'react'
import userContext from './userContext'

const userContextProvider = ({children}) => {
    const  [user, setUser] = useState(null) //React.useState(null) as bhi likh skte hai   
    //Yha Global State Bnate hai jinhe aage jakar use krna hai
  return (
    <userContext.Provider value = {{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default userContextProvider