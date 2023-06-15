import React, { useState } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Time from './components/Time';
import './App.css';

const App = () => {
  const [inputVal,setInput]= useState("");
  const [todo,setTodo] = useState([]);

  const DeletItem=(id)=>{
    setTodo((oldval)=>{
      return oldval.filter((arr,index)=>{
        return index !==id;
      });
    });
  };
  return (
    <>
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header 
            inputVal={inputVal}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
        <ol>
          {todo.map((val,index)=>{
            return <TodoList 
            text={val}
            key={index}
            id={index}
            onSelect={DeletItem}/>
          })}
        </ol>
      </div>
    <div className='Time'><Time/></div>
    </div>
    </>
  );
};

export default App;
