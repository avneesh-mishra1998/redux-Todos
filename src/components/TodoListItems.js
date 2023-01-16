import React from 'react'
import {AiFillDelete,AiTwotoneEdit} from "react-icons/ai"
import {useDispatch} from "react-redux"
import {deleteTodo} from "../actions/action"

function Demo(props) {
  const dispatch= useDispatch();
  return (
    <div className='data mt-4'>
      
        <li>
          {props.data.todoData} 
          <div className="icon-div">
          <span className="icon1"><button className='border-0'><AiTwotoneEdit/></button>  </span>
          <span className="icon2"> <button onClick={()=>dispatch(deleteTodo(props.data.id))}  className='border-0'><AiFillDelete/></button> </span>
          </div>
        </li>
    </div>
  )
}

export default Demo