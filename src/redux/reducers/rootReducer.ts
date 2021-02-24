import {combineReducers} from "redux"
import bookReducer from "./booksReducer"
import cartReducer from "./cartReducers";


const rootReducer = combineReducers({
    book: bookReducer,
    cartItems:cartReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;