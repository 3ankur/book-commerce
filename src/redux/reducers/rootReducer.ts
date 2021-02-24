import {combineReducers} from "redux"
import userAddress from "./addressReducer";
import bookReducer from "./booksReducer"
import cartReducer from "./cartReducers";


const rootReducer = combineReducers({
    book: bookReducer,
    cartItems:cartReducer,
    address: userAddress
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;