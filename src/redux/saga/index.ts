import { all, takeLatest } from "redux-saga/effects";
import { LOAD_BOOK_LIST } from "../actions";
import bootstrap from "./bootstrap-saga";

function* rootSaga(){
    yield all(
        [
            takeLatest(LOAD_BOOK_LIST,bootstrap)
        ]
    )
}

export default rootSaga;