import React, { useState } from 'react'

const Form = ({setTodo,todo}) => {
    
    const [value,setValue]=useState("")
    function handleFormChange(e){
        setValue(e.target.value)

    }
    function handleFormSubmit(e){
        e.preventDefault()
        setTodo([...todo,{title:value,status:"pending",id:Date.now()}])
    }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleFormChange} />
    </form>
  )
}

export default Form