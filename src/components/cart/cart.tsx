import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateAddress, updateProductQuantity } from "../../redux/actions";
import { AppState } from "../../redux/reducers/rootReducer";
import { StyledBookButton } from "../cards/card";
import Payment from "./payment";

const StyledCart = styled.div`
display: flex;
justify-content: space-between;
margin: 10px auto;
padding: 25px;
 
.cart-book{
    max-height: 500px;
    overflow: auto;
    border: 1px solid #000;
    height: 230px;
}

.cart-left,.cart-right{
    width:50%;
}

h3{
    padding: 0 0 10px;
}

.cart-left button{
    background-color: palevioletred;
    border: 1px solid palevioletred;
    color: white;
    padding: 10px 20px;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    cursor: pointer;
}

.cart-item-list{
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
}


.cart-item-list>li{
position: relative;
display: block;
padding: .75rem 1.25rem;
margin-bottom: 5px;
background-color: #fff;
border: 1px solid rgba(0,0,0,.125);
}


`;

const StyledCartButton = styled.div`
display: flex;
    float: right;
`;

const CircleBtn = styled.button`
&:hover{
    border: none;
}

&:focus{
    border: none;
}
&:visited{
    border: none;
}

border-radius: 50%;
padding: 0;
margin: 0;
height: 20px;
width: 20px;
background-color: palevioletred;
border: 1px solid palevioletred;
color: white


`;

function Cart() {

   
    const {shippingAddress} = useSelector((state:AppState)=>state.address);
    const [address,setAddress] = useState('');
    const dispatch = useDispatch();
    const { cart, bookDetailById } = useSelector((state: AppState) => state.cartItems)

    useEffect(()=>{
        setAddress(shippingAddress);
    },[shippingAddress])
    return (
        <StyledCart>
            <div className="cart-left">
                <h3>Shipping Address</h3>
                <div>
                    <textarea onChange={(e)=>setAddress(e.target.value)} value={address} rows={15} cols={60} />
                    <div style={{ display: 'flex' }}>
                        <button onClick={()=>dispatch(updateAddress(address))} >Save Address</button>
                        <button>Edit Address</button>
                    </div>
                </div>
            </div>
            <div className="cart-right">
                <h3>Shipping Bag</h3>
                <div className="cart-book">
                    <ul className="cart-item-list">
                        {
                            cart.map((id) => {
                                const { title,quantity } = bookDetailById[id];
                                return (
                                    <li key={id}>
                                        <span>{title}</span>
                                        <StyledCartButton>
                                        <CircleBtn onClick={()=>dispatch(updateProductQuantity({
                                            ...bookDetailById[id],quantity:quantity-1
                                        }))} disabled={quantity===1} >-</CircleBtn>{quantity}<CircleBtn onClick={()=>dispatch(updateProductQuantity({
                                            ...bookDetailById[id],quantity:quantity+1
                                        }))} >+</CircleBtn>
                                        </StyledCartButton>
                                    </li>
                                )
                            })
                        }
                    </ul>
                      
                </div>
                <Payment/>
            </div>
        </StyledCart>
    )
}
export default Cart;
