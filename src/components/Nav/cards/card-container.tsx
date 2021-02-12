import React from "react";
import styled from "styled-components";
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
    return(
        <>
        <StyledContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledContainer>
        </>
    )
}
export default CardContainer;