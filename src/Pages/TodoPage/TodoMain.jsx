import React, { useState } from 'react'
import './TodoMain.css'
import TodoList from './TodoList/TodoList'

function TodoMain() {
  const [todos,setTodos]=useState([])
  const [newInput,setInput]=useState('')
  const handleInputChange=(event)=>{
    setInput(event.target.value)
  }
  const addNewTodo=()=>{
    setTodos([...todos, {label:newInput, completed:false}])
    setInput('')
  }
  const makeTodoDone=(index)=>{
    const updatedTodos=[...todos]
    updatedTodos[index].completed=true
    setTodos(updatedTodos)
  }
  const deleteTodo=(index)=>{
    const removeTodo=[...todos]
    removeTodo.splice(index, 1)
    setTodos(removeTodo)
  }

  return (
    <div className='Todo-container'>
      <div className='Todo-box'>
        <h1 className='d-flex justify-content-center'>TODO LIST</h1>
        <div className='input-area my-3'>
          <input type="text" placeholder='Todo name' className='name-input' onChange={handleInputChange} value={newInput}/>
          <button className='add-button' onClick={addNewTodo}>Add</button>
        </div>
        <div>
          {todos.map((ele, index)=> <TodoList label={ele.label} count={index} key={index} completed={ele.completed} makeTodoDone={makeTodoDone} deleteTodo={deleteTodo} /> )}
        </div>
      </div>
    </div>
  )
}

export default TodoMain