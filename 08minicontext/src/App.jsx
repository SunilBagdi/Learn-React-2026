import { useContext, useState } from 'react'
import './App.css'
import userContext from './context/userContext';
import Login from './components/Login';
import { Profile } from './components/Profile';
import UserContextProvider from './context/userContextProvider';

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context API useContext Hook --- Global State Access</h1>
      <Login />
      <br/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
