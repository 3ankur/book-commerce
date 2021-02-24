import { call, put } from "redux-saga/effects"
import { addBookToCart, getCartItems, removeBookFromCart, updateQuantity } from "../../api";
import { ADD_BOOK_FAILED, ADD_BOOK_SUCCESS, ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART, REMOVE_BOOK_FROM_CART_SUCCESS, UPDATE_PRODUCT_QUANTITY_SUCCESS, LOAD_CART_ITEMS_SUCCESS } from "../actions";
import { ActionPayload, BookCartAction } from "../actions/types";

export function* bookCart(cartAction: BookCartAction) {
    try {
        const { type, payload } = cartAction;
        if (type === ADD_BOOK_TO_CART) {
            yield call(addBookToCart, payload);
            yield put({ type: ADD_BOOK_SUCCESS, payload: payload });
        }
        else if (type === REMOVE_BOOK_FROM_CART) {
            yield call(removeBookFromCart, payload);
            yield put({ type: REMOVE_BOOK_FROM_CART_SUCCESS, payload: payload });
        }

    } catch (e) {
        console.log(e);
        yield put(
            {
                type: ADD_BOOK_FAILED,
                payload: 'Service not responding'
            }
        )
    }
}

export function* cartItems() {
    try {
        const cartData = yield call(getCartItems);
        yield put({ type: LOAD_CART_ITEMS_SUCCESS, payload: cartData });

    } catch (e) {
        yield put(
            {
                type: ADD_BOOK_FAILED,
                payload: 'Service not responding'
            }
        )
    }
}

export function* updateQuantitySaga({ payload }: ActionPayload) {

    try {
        const book = yield call(updateQuantity, payload);
        console.log(book);
        yield put({ type: UPDATE_PRODUCT_QUANTITY_SUCCESS, payload: book });
    } catch (e) {
        yield put(
            {
                type: ADD_BOOK_FAILED,
                payload: 'Service not responding'
            }
        )
    }
}

//export default bookCart;