import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LOAD_BOOK_LIST } from "../../../redux/actions";
import { BookType } from "../../../redux/reducers/booksReducer";
import { AppState } from "../../../redux/reducers/rootReducer";
import Card from "./card";

const StyledContainer = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-gap: 1rem;
padding: 1rem;

@media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardContainer = () =>{
  const dispatch = useDispatch();
  const {books} = useSelector((state:any)=>state.book)

  useEffect(()=>{
    dispatch({type:LOAD_BOOK_LIST})
  },[])
    return(
        <>
        <StyledContainer>
          {
            console.log(books)
          }
          {
          books.map((bookData : BookType)=>{
            return(
              <Card bookData={bookData} />
            );
           })

          }
          
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
        </StyledContainer>
        </>
    )
}
export default CardContainer;