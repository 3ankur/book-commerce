import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import styled from "styled-components";

const StyledTable = styled.table`

font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;


td, th {
border-bottom: 1px solid #ccc;
text-align: left;
padding: 8px;
}

tr:nth-child(4) {
background-color: #dddddd;
}
`;

const PaymentButton = styled.button`


    background-color: palevioletred;
    border: 1px solid palevioletred;
    color: white;
    padding: 10px 20px;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 15px 2px;
    cursor: pointer;

`;

const TAX_VALUE = 7.50
const SHIPPING_CHARGE = 5.00

function calculateTotal(cart: Array<any>, itemDetails: any) {
    return cart.length ? cart.reduce((a, i) => {
        const { price, quantity } = itemDetails[i];
        const actualPrice = parseInt(price.split('$')[1]) * parseInt(quantity);
        return actualPrice + a;
    }, 0) : 0;
}

function Payment() {

    const { cart, bookDetailById } = useSelector((state: AppState) => state.cartItems);
    const totalPrice = calculateTotal(cart, bookDetailById);
    return (
        <div>
            <h3>Payment Info</h3>
            <StyledTable>
            <tbody>
                <tr>
                    <td>Item Price</td>
                    <td>$ {totalPrice}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$ {TAX_VALUE}</td>
                </tr>

                <tr>
                    <td>Shipping Charge</td>
                    <td>$ {SHIPPING_CHARGE}</td>
                </tr>

                <tr>
                    <td>Total</td>
                    <td>$ {SHIPPING_CHARGE + TAX_VALUE + totalPrice}</td>
                </tr>
                </tbody>
            </StyledTable>
            <PaymentButton>Checkout</PaymentButton>
            <PaymentButton>Cancel</PaymentButton>
        </div>
    );
}
export default Payment;