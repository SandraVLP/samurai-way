import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Post } from "./Post/Post";
import { ProfilePageType } from "../../../redux/state";

type ExtraPropsType = {
  addPost: (text:string) => void
}

type ProfileProps = ProfilePageType & ExtraPropsType;

export const MyPosts = (props: ProfileProps) => {
  const [text, setText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)

  }

  const handleClick = () => {
    props.addPost(text)
    setText('');
  }



  return (
    <StyledMyPosts>
      <h2>My Posts</h2>
      <div>
        {" "}
        <textarea onChange={handleChange} value={text}></textarea>
        <button onClick={handleClick}>Add post</button>
      </div>

      {props.posts.map((data) => (
        <Post message={data.message} likes={data.likesCount} />
      ))}
    </StyledMyPosts>
  );
};

const StyledMyPosts = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
  }
`;
