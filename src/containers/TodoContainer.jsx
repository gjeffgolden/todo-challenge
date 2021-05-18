import React from 'react'
import TodoItem from '../components/TodoItem'

export default function TodoContainer({ todos, deleteTodo }) {

    const displayTodos = () => {
        return todos.map((todo, i) => {
            return <TodoItem key={i} todo={todo} deleteTodo={deleteTodo} />
        })
    }

    return (
        <div>
            {displayTodos()}
        </div>
    )
}
