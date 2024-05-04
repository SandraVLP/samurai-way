import React from 'react'
import styled from 'styled-components';
import { Post } from './Post/Post';

let postsData = [
  
    {
      id: 1,
      message: "Post1",
      likesCount: 2
    },
    {
      id: 2,
      message: "Post2",
      likesCount: 5
    },
    {
      id: 3,
      message: "Post3",
      likesCount: 10
    }
  
]

export function MyPosts() {
  return (
    <StyledMyPosts>
      <h2>My Posts</h2>
      <div>        <textarea></textarea>
        <button>Add post</button>
</div>

     {postsData.map((data) => <Post message={data.message} likes={data.likesCount}/> )}
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