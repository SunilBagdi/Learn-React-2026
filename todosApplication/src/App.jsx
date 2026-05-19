import React, { useEffect, useState } from 'react'
import TodoFrom from './components/TodoFrom' 
import {TodoProvider} from './contexts/TodoContext'
import { TodoItem } from './components';

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) // jo bhi neya todo aaye us new id ke sath add kr do 
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo) ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === 
    id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todoStorage = JSON.parse(localStorage.getItem("todos"))
    if(todoStorage && todoStorage.length > 0){
      setTodos(todoStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (

    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                  {/* Todo form goes here */}
                  < TodoFrom /> 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {
                  todos.map((todo) => (
                    <div key={todo.id} className='w-full'>
                      <TodoItem todo={todo}/>
                    </div>
                  ))
                }
            </div>
        </div>
      </div>
    </TodoProvider>
                        
  )
}

export default App