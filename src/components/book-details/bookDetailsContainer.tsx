import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { loadBookDetails } from "../../api";
import { StyledBookButton } from "../cards/card";

import { useDispatch, useSelector } from "react-redux";
import { BookType } from "../../redux/actions/types";
import { AppState } from "../../redux/reducers/rootReducer";
import { addItemToCart, removeItemFromCart } from "../../redux/actions";
const StyledBookContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

const StyledBookImage = styled.div`
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;

img{
    width:15rem;
}

@media (min-width: 768px)
 {
    flex: 0 0 25%;
    max-width: 50%;
}
`;

const StyledBookDetails = styled.div`


position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;

p{
    padding : 0.5rem;
}

h2{
    padding : 0.5rem;
}

.about-book{
    margin-top:0.5rem;
}

@media (min-width: 768px)
 {
    flex: 0 0 50%;
    max-width: 50%;
}

`;


const StyledMain = styled.main`
flex: 0 0 83.333333%;
max-width: 83.333333%;
margin: 2rem auto; 
`;

type bookParam ={
    id:number | string
}

function BookDetailsContainer() {
    const param : any  = useParams();
    const dispatch = useDispatch();
    const { bookDetailById } = useSelector((state: AppState) => state.cartItems)
    const [loading , setLoading] = useState(true);
    const [bookDetails,setBookDetails] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        coverImage:'',
        author: '',
        ISBN:'',
        pages:''
    });
    useEffect(()=>{
   
        async function loadData(){
            const data : BookType= await loadBookDetails(param.id);
            setLoading(false);
            setBookDetails(data);
        }
        loadData(); 

    },[])
    if(loading){
        return <div>Loading......</div>
    }
    return (
        <StyledMain>
            <section>
                <StyledBookContainer>
                    <StyledBookImage>
                        <img src={bookDetails.coverImage} alt="Card image" />
                    </StyledBookImage>
                    <StyledBookDetails>
                        <h2 >{bookDetails.title}</h2>
                        <p>Price <span><strong>{bookDetails.price}</strong></span></p>
                        <p>Author Name <span><strong>{bookDetails.author}</strong></span></p>
                        <p>Pages <span><strong>{bookDetails.pages}</strong></span></p>
                        <p>ISBN<span> <strong>{bookDetails.ISBN}</strong></span></p>
                        <div style={{ display: 'flex' }}>

                            {
                                bookDetailById[bookDetails.id] ? (<StyledBookButton onClick={()=>dispatch(removeItemFromCart(bookDetails))}>
                                    <span>Remove</span>
                                </StyledBookButton>) : <StyledBookButton onClick={()=>dispatch(addItemToCart(bookDetails))}>
                                <span>Add to Cart</span>
                            </StyledBookButton>
                            }
                            
                            <StyledBookButton>
                                <span>Buy Now</span>
                            </StyledBookButton>
                        </div>
                        <div className="about-book">
                            <h3>About book</h3>
                            <p>
                            {bookDetails.description}
                        </p>
                        </div>
                    </StyledBookDetails>
                </StyledBookContainer>
            </section>
        </StyledMain>

    )
}
export default BookDetailsContainer;