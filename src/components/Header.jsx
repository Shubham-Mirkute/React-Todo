import React from 'react'

const Header = (props) => {
  

  const OnInputChange=(event)=>{
    props.setInput(event.target.value);
  }; 

  const OnClickSubmit = (event)=>{
    var showMessage = document.getElementsByClassName("task-message")[0]
    props.setMessage()
    event.preventDefault();
    if(props.inputVal.trim() !==''){
      showMessage.style.display = "none";
      console.log(props.inputVal)
      props.setTodo((oldval)=>{
          return [...oldval,props.inputVal ];
      });
      props.setInput("");
    }
    else{
      showMessage.style.display = "block";
   
      props.setMessage("Input field is empty")
    }
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
      <br></br>
    </>
  );
};

export default Header