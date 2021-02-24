import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppState } from "../../redux/reducers/rootReducer";

const StyledOrder = styled.div`
margin: 10px auto;
padding: 25px;

.header{
    background: #f1f1f1;
    padding: 8px;
    font-size: 12px;
}

.order-list{
    border:1px solid #ccc;
    margin: 0px 0px 15px;
}

.basic-details{
    display: flex;
    padding: 10px;
}

.book-overview{
    padding : 5px;
    display: flex;
    flex-direction: column;

    span{
        font-size:12px
    }
}

`;

function Orders(){
    const {cart,bookDetailById} = useSelector((state:AppState)=>state.cartItems)

    return(
        <StyledOrder>
            {
                cart.map((id)=>{
                    const {title , coverImage, author,price} = bookDetailById[id]
                    return (
                        <div className="order-list">
                           <div className="header">
                               <span>Order Place</span> <strong>24 Feb 2021</strong>
                               <span style={{float:"right"}}>Status: <strong>Delivered</strong> </span>
                           </div>
                          <div className="basic-details">
                          <img src={coverImage} height="50" width="50" />
                             <div className="book-overview">
                             <h5>{title}</h5>
                             <span >{author}</span>
                             <span>{price}</span>
                             </div>
                              
                              </div> 
                        </div>
                    )
                })
            }
            <div>

            </div>
        </StyledOrder>
    )
}
export default Orders;