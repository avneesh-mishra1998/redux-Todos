import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {BsPencilSquare} from "react-icons/bs"
import {addItem} from "../actions/action"

function TodoInput() {
  const dispatch= useDispatch()
  const [item,setItem]= useState("")
  // console.log("item---->",item);
  const submitHandler= (e)=>{
    e.preventDefault()
    setItem("")
  }
  return (
    <div>
        <h3 className='text-capitalise textcenter text-primary mb-5 pb-3 '> 
         <span className='border-bottom pb-1 border-2 border-primary'> ~ Todos ~ </span>  
        </h3>
        <div className="card card-body my-3">
          <form onSubmit={submitHandler}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i><BsPencilSquare/></i>
                </div>
              </div>
              <input type="text" className="form-control" value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Write Your Todos Here......"/>
            </div>
            <div className='mt-3'>
              <button onClick={()=>dispatch(addItem(item))} className='col-12 bg-primary text-white border-0 py-1' >Add Todo</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default TodoInput