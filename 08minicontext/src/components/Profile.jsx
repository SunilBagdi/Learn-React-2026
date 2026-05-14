import React, { useContext } from 'react'
import userContext from '../context/userContext';

export const Profile = () => {

    const {user} = useContext(userContext)

    if (!user) return <div>Please login</div>
    
    return <div>WELCOME {user.username}</div>
}
