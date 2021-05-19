import React from 'react'
import TodoItem from '../components/TodoItem'

export default function TodoContainer({ todos, deleteTodo }) {

    const displayTodos = () => {
        return todos.map((todo, i) => {
            if (i % 2) {
                return <TodoItem key={i} todo={todo} deleteTodo={deleteTodo} dynamicClass="todo-list" />
            } else {
                return <TodoItem key={i} todo={todo} deleteTodo={deleteTodo} dynamicClass="todo-list-gray" />
            }
        })
    }

    return (
        <div>
            {displayTodos()}
        </div>
    )
}
