import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_BOOK_TO_CART, GET_SHIPPING_ADDRESS, LOAD_BOOK_LIST, LOAD_CART_ITEMS, REMOVE_BOOK_FROM_CART, UPDATE_PRODUCT_QUANTITY, UPDATE_SHIPPING_ADDRESS } from "../actions";
import { addressSaga, getAddressSaga } from "./address-saga";
import {bookCart,cartItems, updateQuantitySaga} from "./book-cart-saga";
import bootstrap from "./bootstrap-saga";

function* rootSaga(){
    yield all(
        [
            takeEvery(LOAD_BOOK_LIST,bootstrap),
            takeEvery(LOAD_CART_ITEMS,cartItems),
            takeEvery(ADD_BOOK_TO_CART,bookCart),
            takeEvery(REMOVE_BOOK_FROM_CART,bookCart),
            takeEvery(UPDATE_SHIPPING_ADDRESS,addressSaga),
            takeEvery(GET_SHIPPING_ADDRESS, getAddressSaga),
            takeEvery(UPDATE_PRODUCT_QUANTITY,updateQuantitySaga)
        ]
    )
}

export default rootSaga;