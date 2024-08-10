import React from 'react'
import './TodoList.css'
import deleteIcon from '../../../assets/delete.svg'
import doneIcon from '../../../assets/done.svg'

function TodoList({count,label,completed,makeTodoDone,deleteTodo}) {
  return (
    <div className='List-item my-2'>
      <h4 className={`${completed? 'done' : ""}`}> {count+1}. {label}</h4>
      <div>
        {!completed && <button onClick={()=>makeTodoDone(count)} className='Done-button mx-2'><img src={doneIcon} width='25px' /></button>}
        <button onClick={()=>deleteTodo(count)} className='Remove-button mx-2'><img src={deleteIcon} width='25px'/></button>
      </div>
    </div>
  )
}

export default TodoList