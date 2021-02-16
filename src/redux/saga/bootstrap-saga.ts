import {call, put } from "redux-saga/effects"
import { loadBookList } from "../../api"
import { LOAD_BOOK_SUCCESS,LOAD_BOOK_ERROR } from "../actions";

 function* bootstrap(){

    try{
        const res = yield call(loadBookList);
        yield put({type:LOAD_BOOK_SUCCESS,payload:res})
    }catch(e){
        yield put({
            type: LOAD_BOOK_ERROR,
            payload: 'Api failed to load books'
        })
    }       

}

export default bootstrap;