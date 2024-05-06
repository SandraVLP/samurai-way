import React from 'react'
import styled from 'styled-components';
import { Post } from './Post/Post';
import { PostType } from '../../../App';

type PropsType = {
  posts: Array<PostType>

}





export const MyPosts = (props: PropsType) => {
  return (
    <StyledMyPosts>
      <h2>My Posts</h2>
      <div>        <textarea></textarea>
        <button>Add post</button>
</div>

     {props.posts.map((data) => <Post message={data.message} likes={data.likesCount}/> )}
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