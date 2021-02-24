import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_BOOK_TO_CART, LOAD_BOOK_LIST, LOAD_CART_ITEMS, REMOVE_BOOK_FROM_CART } from "../actions";
import {bookCart,cartItems} from "./book-cart-saga";
import bootstrap from "./bootstrap-saga";

function* rootSaga(){
    yield all(
        [
            takeEvery(LOAD_BOOK_LIST,bootstrap),
            takeEvery(LOAD_CART_ITEMS,cartItems),
            takeEvery(ADD_BOOK_TO_CART,bookCart),
            takeEvery(REMOVE_BOOK_FROM_CART,bookCart)
        ]
    )
}

export default rootSaga;