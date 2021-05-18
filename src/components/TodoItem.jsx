import React, { useState } from 'react'

export default function TodoItem({ todo, deleteTodo }) {

    const [showDeleteButton, setShowDeleteButton] = useState(false)

    const toggleDelete = () => {
        setShowDeleteButton(!showDeleteButton)
    }

    const handleClick = () => {
        deleteTodo(todo)
    }

    const handleMouseEnter = () => {
        setShowDeleteButton(true)
    }

    const handleMouseLeave = () => {
        setShowDeleteButton(false)
    }

    return (
        <div 
            className="todo-list" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            {showDeleteButton ? <button className="delete-button" onClick={handleClick}>-</button> : null}
            <p>{todo}</p>
        </div>
    )
}
