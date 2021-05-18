import React, { useState } from 'react'

export default function FormContainer({ addTodo }) {

    const [formData, setFormData] = useState('')

    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(formData)
        setFormData('')
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
        </form>
    )
}
