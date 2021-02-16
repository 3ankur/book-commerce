import {combineReducers} from "redux"
import bookReducer from "./booksReducer"


const rootReducer = combineReducers({
    book: bookReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;