import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function TodoItem({ todo, deleteTodo }) {

    const [showDeleteButton, setShowDeleteButton] = useState(false)

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
            {showDeleteButton ? <DeleteOutlineIcon className="delete-button" onClick={handleClick} /> : null}
            <p>{todo}</p>
        </div>
    )
}
