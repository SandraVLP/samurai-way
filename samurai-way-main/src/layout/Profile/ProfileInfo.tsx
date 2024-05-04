import React from 'react';
import ImageTest from "../../assets/mainImg.png";
import styled from 'styled-components';



export const ProfileInfo = () => {
  return (
         <div>      
         <StyledImg src={ImageTest} alt='test'></StyledImg>
         <p>ava + description</p>
         </div>

  )
}


const StyledImg = styled.img`
  max-width: 800px;
`