import { ADD_BOOK_SUCCESS, LOAD_CART_ITEMS_SUCCESS, REMOVE_BOOK_FROM_CART, REMOVE_BOOK_FROM_CART_SUCCESS, UPDATE_PRODUCT_QUANTITY_SUCCESS } from "../actions";
import { BookCartAction, BookType } from "../actions/types"

type CartTypes = {
    cart: Array<number | string>,
    bookDetailById: { [index: string]: any }
}

const initialState: CartTypes = {
    cart: [],
    bookDetailById: {}
}

const cartReducer = (state = initialState, action: BookCartAction) => {

    switch (action.type) {

        case LOAD_CART_ITEMS_SUCCESS:{
            const { payload } = action;
            const { cart, bookDetailById } = state;
            console.log("==>",payload)
             payload.forEach((item:BookType)=>{
                 if(cart.indexOf(item.id)===-1){
                    cart.push(item.id);
                bookDetailById[item.id] = item;
                 }
                
             });

             return{
                 ...state,
                cart,
                bookDetailById
             }
        }


        case ADD_BOOK_SUCCESS:
            const { payload } = action;
            const { cart, bookDetailById } = state;
            cart.push(payload.id);
            bookDetailById[payload.id] = {...payload,quantity:1};

            return {
                ...state,
                cart,
                bookDetailById
            };
        case REMOVE_BOOK_FROM_CART_SUCCESS:{
            const { payload } = action;
            const { cart, bookDetailById } = state;

            const filterItems = cart.filter((item )=>item !=payload.id);
            delete bookDetailById[payload.id];
            return{
                ...state,
                cart: filterItems,
                bookDetailById
            }
        }

        case UPDATE_PRODUCT_QUANTITY_SUCCESS:{
            const {payload} = action;
            const {bookDetailById} = state;
            bookDetailById[payload.id] = payload;

            return{
                ...state,
                bookDetailById
            }
        }


        
            

        default:
            return state;
    }
}
export default cartReducer;