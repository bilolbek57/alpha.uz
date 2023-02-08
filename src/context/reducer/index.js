import { combineReducers } from "redux"
import heart from "./heart";


const rootReducer = combineReducers({
    water: ()=> "redux",
    heart,
})

export default rootReducer;