import { BookType } from "./types";

export const LOAD_BOOK_LIST = 'LOAD_BOOK_LIST';
export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS';
export const LOAD_BOOK_ERROR = 'LOAD_BOOK_ERROR';
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const ADD_BOOK_FAILED = 'ADD_BOOK_FAILED';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';
export const REMOVE_BOOK_FROM_CART_SUCCESS = 'REMOVE_BOOK_FROM_CART_SUCCESS';
export const REMOVE_BOOK_FROM_CART_FAILED = 'REMOVE_BOOK_FROM_CART_FAILED';
export const LOAD_CART_ITEMS = 'LOAD_CART_ITEMS';
export const LOAD_CART_ITEMS_SUCCESS = 'LOAD_CART_ITEMS_SUCCESS'; 
export const UPDATE_SHIPPING_ADDRESS = 'UPDATE_SHIPPING_ADDRESS';
export const UPDATE_SHIPPING_ADDRESS_SUCCESS = 'UPDATE_SHIPPING_ADDRESS_SUCCESS';
export const GET_SHIPPING_ADDRESS= 'GET_SHIPPING_ADDRESS'
export const GET_SHIPPING_ADDRESS_SUCCESS= 'GET_SHIPPING_ADDRESS_SUCCESS'
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const UPDATE_PRODUCT_QUANTITY_SUCCESS = 'UPDATE_PRODUCT_QUANTITY_SUCCESS';
export const API_FAILED = 'API_FAILED';

export function addItemToCart(book: BookType) {
    return {
        type: ADD_BOOK_TO_CART,
        payload: book
    }
}

export function removeItemFromCart(book: BookType) {
   return {
    type: REMOVE_BOOK_FROM_CART,
    payload: book
}
}

export function updateAddress(address:string){
    return{
        type: UPDATE_SHIPPING_ADDRESS,
        payload: address
    }
}

export function updateProductQuantity(book: BookType){
    return{
        type: UPDATE_PRODUCT_QUANTITY,
        payload: book
    }
}
