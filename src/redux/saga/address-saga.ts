import {call, put } from "redux-saga/effects"
import { getAddress, updateAddress } from "../../api";
import { API_FAILED, UPDATE_SHIPPING_ADDRESS_SUCCESS } from "../actions";
import { ActionPayload } from "../actions/types";

 export function* addressSaga({payload}:ActionPayload){
    try{
        const res = yield call(updateAddress,payload);
        yield put({type:UPDATE_SHIPPING_ADDRESS_SUCCESS,payload:res})
    }catch(e){
        yield put({
            type: API_FAILED,
            payload: 'Api failed to updated address'
        })
    }       
}

export function* getAddressSaga() : any {
    try{
        const res = yield call(getAddress);
        yield put({type:UPDATE_SHIPPING_ADDRESS_SUCCESS,payload:res})
    }catch(e:unknown){
        yield put({
            type: API_FAILED,
            payload: 'Api failed to updated address'
        })
    }
  
}

