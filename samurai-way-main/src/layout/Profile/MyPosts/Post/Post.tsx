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
       
        <StyledImg src={Ava} alt='Avatarka'></StyledImg>
        <p>{props.message}</p>
        <span>Like {props.likes}</span>
        
        </div>
  )
}


const StyledImg = styled.img`
    width: 50px;
    border-radius: 50%;
`
