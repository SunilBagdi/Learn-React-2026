import React, { useContext, useState } from 'react'
import userContext from '../context/userContext';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='USERNAME'/>
        <br/><br/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='PASSWORD'/>
        <br/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login


