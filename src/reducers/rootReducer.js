import {combineReducers} from "redux"
import todoItems from "./reducer"

const rootReducer= combineReducers({todoItems})

export default rootReducer