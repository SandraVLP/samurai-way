import React from "react";

import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";

import { ProfilePageType } from "../../redux/state";

type ExtraPropsType = {
  addPost: (text:string) => void
}

type ProfileProps = ProfilePageType & ExtraPropsType;

export const Profile = (props: ProfileProps) => {
  return (
    <div className="content">
      <ProfileInfo />

      <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
  );
};
