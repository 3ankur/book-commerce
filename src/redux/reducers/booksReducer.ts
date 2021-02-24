import {  LOAD_BOOK_ERROR, LOAD_BOOK_SUCCESS } from "../actions";
import { BookType } from "../actions/types";

export  type BookState={
    books: Array<BookType>,//Array<BookType>
    error: string | null
}

const initialState : BookState = {
    books: [],
    error: null
};


type ActionType ={
    readonly type: string,
    payload : unknown
}

 const bookReducer = (state=initialState,action:ActionType)=>{

    switch(action.type){
        case LOAD_BOOK_SUCCESS:
            return {
                ...state,
                books:action.payload
            }
        case LOAD_BOOK_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;