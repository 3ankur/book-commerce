import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BookType } from "../../redux/actions/types";
// import { AppState } from "../../../redux/reducers/rootReducer";
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

  const {books} = useSelector((state:any)=>state.book)

    return(
        <>
        <StyledContainer>
          {
          books.map((bookData : BookType)=>{
            return(
              <Card key={bookData.id}  bookData={bookData} />
            );
           })

          }
        </StyledContainer>
        </>
    )
}
export default CardContainer;