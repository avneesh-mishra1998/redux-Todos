import React from 'react'
import TodoListItems from './TodoListItems';
import {useSelector,useDispatch} from "react-redux"
import {clearHandle} from "../actions/action"

function TodoList() {
  const todoData= useSelector(state=>state.todoItems)
  const dispatch= useDispatch()
  return (
    <div>
      <div>
        {
          todoData.map((data,index)=><TodoListItems data={data} key={index}/>)
        }
      </div>
      <div className='my-4'>
      <button onClick={()=>dispatch(clearHandle())} className="col-12 bg-danger text-white border-0 py-1">Clear List</button>
      </div>
    </div>
  )
}

export default TodoList