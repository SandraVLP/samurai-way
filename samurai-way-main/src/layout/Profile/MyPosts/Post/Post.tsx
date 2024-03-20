import React from 'react'
import Ava from "../../../../assets/avatarka.jpeg"
import styled from 'styled-components'

type PostPropsType = {
    message: string
    likes: number

}

export function Post(props:PostPropsType) {
  return (
    <div>
        <span>Like {props.likes}</span>
        <StyledImg src={Ava} alt='Avatarka'></StyledImg>
        <p>{props.message}</p>
        
        </div>
  )
}


const StyledImg = styled.img`
    width: 50px;
    border-radius: 50%;
`
