import React from 'react'
import styled from 'styled-components';
import { Post } from './Post/Post';

export function MyPosts() {
  return (
    <StyledMyPosts>
      <h2>My Posts</h2>
      <div>        <textarea></textarea>
        <button>Add post</button>
</div>

     
  <Post message='Post 1' likes={2}/>
  <Post message='Post 2' likes={4}/>
  <Post message='Post 3' likes={7}/>
  <Post message='Post 4' likes={10}/>
    </StyledMyPosts>
  )
}

const StyledMyPosts = styled.div`
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 50%;
    }
`