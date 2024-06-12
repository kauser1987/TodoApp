import React, { useEffect, useRef, useState } from 'react'
import Todoitem from './Todoitem'

const App = () => {
  const inputref = useRef()
  const [todo,setTodo] = useState(localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[])

  const addtext =()=>{
    var inputText = inputref.current.value.trim();
    if(inputText ==="" ){
      return null;
    }
    const newTodo = {
      id:Date.now(),
      text:inputText,
      isComplete:false
    }
    setTodo((prev)=>[...prev,newTodo])
    inputref.current.value=""
  }
  const toggle=(id)=>{
    setTodo((prev)=>{ return prev.map((item)=>{
      if(item.id===id){
        return {...item,isComplete:!item.isComplete}
        
      }
      return item;
    })})
  }
  const deleteTask =(id)=>{
    setTodo((prev)=>{return prev.filter((item)=> item.id!==id )})
  }
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))

  },[todo])
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-900'>
        <h1 className='text-white font-semibold text-[3vw]'>Todo List</h1>
      <div className='min-w-[30vw] h-[35vw] overflow-scroll flex flex-col  items-center gap-4 py-4   rounded-lg bg-white'>
        <div className='flex flex-col gap-4  items-center  font-semibold'>
        <div className=' flex border-2 rounded-full text-white gap-4'>
          <input ref={inputref} className='h-[4vw] w-[15vw] flex items-center justify-center border-0 text-black outline-none px-2 rounded-lg' type="text" placeholder='enter your task ' />
          <button onClick={addtext} className='px-4 py-2 rounded-full bg-orange-600 text-center'>Add</button>
        </div>
        {todo.map((item,index)=>{
          return <Todoitem key={index} id={item.id} text={item.text} deleteTask= {deleteTask} isComplete={item.isComplete} toggle={toggle}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default App