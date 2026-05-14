import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos:[{
        id: 1,
        todo: "hello react",
        completed: false
    },
    {
        id: 2,
        todo: "hello JS",
        completed: true
    }],

    addTodo: (todos) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider