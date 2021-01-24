import {combineReducers} from "redux"
import repositoriesReducer from "./repositoriesReducer"

const reducers = combineReducers({
    //___________
    repositories: repositoriesReducer
})

export default reducers
