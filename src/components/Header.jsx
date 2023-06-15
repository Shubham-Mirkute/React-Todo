import React from 'react'

const Header = (props) => {
  

  const OnInputChange=(event)=>{
    props.setInput(event.target.value);
  }; 

  const OnClickSubmit = ()=>{
    props.setTodo((oldval)=>{
        return [...oldval,props.inputVal ];
    });
    props.setInput("");
  };
  return (
    <>
    <div className='header'>
        <h1>ToDo List</h1>
    </div>

    <input type='text' 
            placeholder='Enter a Task' 
            className='task-input'
            value={props.inputVal}
            required 
            onChange={OnInputChange}
            />
    <button className="button-add" type='submit' onClick={OnClickSubmit}>Add</button>
      
    </>
  );
};

export default Header