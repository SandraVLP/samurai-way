import React from 'react'
import styled from 'styled-components';
import { Post } from './Post/Post';

export function MyPosts() {
  return (
    <StyledMyPosts>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
     
  <Post />
    </StyledMyPosts>
  )
}

const StyledMyPosts = styled.div`
    
`