import React from 'react'
import Ava from "../../../../assets/avatarka.jpeg"
import styled from 'styled-components'

export function Post() {
  return (
    <div>
        <StyledImg src={Ava} alt='Avatarka'></StyledImg>
        Post
        <span>Like</span>
        </div>
  )
}


const StyledImg = styled.img`
    width: 50px;
    border-radius: 50%;
`
