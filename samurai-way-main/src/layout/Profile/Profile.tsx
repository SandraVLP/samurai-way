import React from 'react'
import ImageTest from "../../assets/mainImg.png";
import styled from 'styled-components';
import { MyPosts } from './MyPosts/MyPosts';

export function Profile() {
  return (
    <div className='content'>
      <StyledImg src={ImageTest} alt='test'></StyledImg>
      <p>ava + description</p>
      <p>My Posts</p>
<MyPosts />
    </div>
  )
}


const StyledImg = styled.img`
  max-width: 800px;
`