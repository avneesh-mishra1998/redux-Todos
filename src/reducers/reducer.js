import {v4 as uuidv4} from "uuid"

const todoItems= (state= [], Action)=>{
    switch(Action.type)
    {
        case "ADD_ITEM":
        return [...state,
            {todoData: Action.data,
            id: uuidv4()}
        ]  

        case "DELETE_ITEM":
            return state=state.filter(item=>item.id !==Action.id)

        case "CLEAR_ITEM":
            return state=[]
             default :
               return state
    }
}

export default todoItems