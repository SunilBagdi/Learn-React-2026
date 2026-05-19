import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
    try {
        const serializedTodos = localStorage.getItem('todos');
        if(serializedTodos === null){
            return []
        }
        return JSON.parse(serializedTodos);
    }
    catch (error) {
        return error
    }
};

const initialState = {
    todos: loadTodos()
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: ( state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, newText} = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);

            if (existingTodo){
                existingTodo.text = newText;
            }
        },
        toggleComplete: (state, action) =>{
            const id = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.completed = !existingTodo.completed;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;