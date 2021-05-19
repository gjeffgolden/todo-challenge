import React, { useState } from 'react'

export default function FormContainer({ addTodo }) {

    const [formData, setFormData] = useState('')

    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const handleSubmit = (event) => {
        if (formData.length > 0 && formData.length < 26) {
            event.preventDefault()
            addTodo(formData)
            setFormData('')
        } else {
            event.preventDefault()
            console.log("Todos must be between 1 and 25 characters.")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <h4>TO-DO LIST</h4>
                <input className="submit-button" type="submit" value="+" />
            </div>
            <div>
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Add New Todo"
                    value={formData} 
                    onChange={handleChange} 
                />
            </div>
            {formData.length === 0 || formData.length > 25 ? <p className="todo-warning">*must be between 1-25 characters</p> : null}
        </form>
    )
}
