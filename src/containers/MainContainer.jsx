import React from 'react'
import FormContainer from './FormContainer'
import TodoContainer from './TodoContainer'

export default function MainContainer({ todos, addTodo, deleteTodo }) {
    return (
        <div className="main-container">
            <FormContainer addTodo={addTodo} todos={todos} />
            <TodoContainer todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}
