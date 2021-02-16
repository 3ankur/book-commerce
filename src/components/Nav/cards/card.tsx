import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookType } from "../../../redux/reducers/booksReducer";

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
    background-color: #4c94af;
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

interface bookProps {
    bookData: BookType
}
const Card = ({ bookData }: bookProps) => {
    return (
        <>
            <StyledCard>
            <Link to={`book/${bookData.id}`}><img src={bookData.coverImage} alt="Card image" /></Link>
                <div className="container">
                    <h4>{bookData.title}</h4>
                    <p>{bookData.author}</p>
                    <div>{bookData.price}</div>
                    <div><button className="btn-buynow">Button</button></div>
                </div>

            </StyledCard>
        </>
    )
}
export default Card;