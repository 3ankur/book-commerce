import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
background-color: dodgerblue;
color: white;
padding: 1rem;
height: 4rem;
`;

const Card = () => {
    return (
        <>
            <StyledCard>   <h5>Card !!</h5></StyledCard>
        </>
    )
}
export default Card;