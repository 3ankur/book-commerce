import {testSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { getAddress, updateAddress } from "../../../api";
import { UPDATE_SHIPPING_ADDRESS, UPDATE_SHIPPING_ADDRESS_SUCCESS } from "../../actions";
import {addressSaga,getAddressSaga} from "../address-saga";


describe('Address saga',()=>{
    
     describe('update address',()=>{
        const mockAddressPayload = {
            type: UPDATE_SHIPPING_ADDRESS,
            payload:  "my LONDON Address"
        };
        const saga = testSaga(addressSaga, mockAddressPayload);
    
        it('should run without error',()=>{
            const {payload} = mockAddressPayload;
            const newPayload = {address: payload};
            saga.next().call(updateAddress,payload);
            saga.next(newPayload).put({type: UPDATE_SHIPPING_ADDRESS_SUCCESS,payload:newPayload});
            saga.next().isDone();
        });
        it('should fail when api failed',()=>{
        // todo need to mock the data from api
        });
     });

     describe('getAddressSaga',()=>{
        const saga = testSaga(getAddressSaga);
        it('should return the address',()=>{
            const newPayload = {address: 'HOUNSLOW WEST LONDON'};
            saga.next().call(getAddress);
            saga.next(newPayload).put({type: UPDATE_SHIPPING_ADDRESS_SUCCESS,payload:newPayload});
            saga.next().isDone();
        });
     })
});