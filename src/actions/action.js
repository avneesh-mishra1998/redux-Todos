export const addItem= (data)=>{
    return{
        type: "ADD_ITEM",
        data: data
    }
}
export const deleteTodo= (id)=>{
    return{
        type: "DELETE_ITEM",
        id: id
    }
}

export const clearHandle= ()=>{
    return{
        type: "CLEAR_ITEM"
    }
}
