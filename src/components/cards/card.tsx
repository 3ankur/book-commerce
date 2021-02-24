import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addItemToCart, ADD_BOOK_TO_CART, removeItemFromCart, REMOVE_BOOK_FROM_CART } from "../../redux/actions";
import { BookType } from "../../redux/actions/types";
import { AppState } from "../../redux/reducers/rootReducer";


const StyledCard = styled.div`
background-color: #f1f1f1;
color: #3a3838;
width: 256px;
img{
    width: 100%;
    max-width: 256px;
    height: auto;
}

.container{
    padding:1rem;
}
.btn-buynow{
    background-color: #008B8B;
    border: 1px solid #000;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
}
`;

export const StyledBookButton = styled.button`
background-color:  palevioletred;
border: 1px solid palevioletred;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
width: 100%;
`;

interface bookProps {
    bookData: BookType
}
const Card = ({ bookData }: bookProps) => {
    const dispatch = useDispatch();
    const { bookDetailById } = useSelector((state: AppState) => state.cartItems)

    return (
        <>
            <StyledCard>
                <Link to={`book/${bookData.id}`}><img src={bookData.coverImage} alt="Card image" /></Link>
                <div className="container">
                    <h4>{bookData.title}</h4>
                    <p>{bookData.author}</p>
                    <div>{bookData.price}</div>
                    <div>
                        {
                            bookDetailById[(bookData.id)] ? <StyledBookButton onClick={()=>dispatch(removeItemFromCart(bookData)) } >Remove</StyledBookButton> : <StyledBookButton onClick={() =>dispatch(addItemToCart(bookData))  }>Buy Now</StyledBookButton>
                        }
                    </div>
                </div>
            </StyledCard>
        </>
    )
}
export default Card;