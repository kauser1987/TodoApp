import React from 'react'
import tick from './assets/tick.png' 
import not_tick from './assets/not_tick.png' 
import delete_pic from './assets/delete.png' 

const Todoitem = ({text,id,deleteTask,isComplete,toggle}) => {
  return (
    <div className='w-full px-2 flex justify-between items-center gap-4'>
        <div onClick={()=>{toggle(id)}} className='flex gap-2'>
        <img  className='w-7' src={isComplete?tick:not_tick} alt="" />
        <p className={isComplete?"line-through":""}>{text}</p>
        </div>
        <img onClick={()=>{deleteTask(id)}} className='w-[17px]' src={delete_pic} alt="" />
    </div>
  )
}

export default Todoitem