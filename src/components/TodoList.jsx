import React from 'react'

const TodoList = (props) => {
    
  return (
    <>
    <li className='list-item'>
        <div className='list'>{props.text}</div>
        <div>
        <button className='button-delete task-button'>
          <i className='fa fa-trash' onClick={()=>{
            props.onSelect(props.id);
          }}></i>
        </button>
        </div>
    </li>
    </>
  )
}

export default TodoList