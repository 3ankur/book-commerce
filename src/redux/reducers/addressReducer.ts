import { GET_SHIPPING_ADDRESS_SUCCESS, UPDATE_SHIPPING_ADDRESS_SUCCESS } from "../actions"
import { ActionPayload } from "../actions/types"

const initialState = {
    billingAddress: '',
    shippingAddress: ''
}


const userAddress = (state=initialState, action:ActionPayload) =>{

    if(action.type === UPDATE_SHIPPING_ADDRESS_SUCCESS || action.type === GET_SHIPPING_ADDRESS_SUCCESS){
        return {
            ...state,
            shippingAddress: action.payload.address
        }
    }
    return state;
}
export default userAddress;