import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type DialogItemProps = {
  title: string;
  id: number;
};

let dialogsFriendsData = [
  {
    id: 1,
    name: "Sasha"
  },
  {
    id: 2,
    name: "Ivan"
  },
  {
    id: 3,
    name: "Sveta"
  }
]

let dialogsMessageData = [
  {
    id: 1,
    message: "Hi"
  },
  {
    id: 2,
    message: "How are you"
  },
  {
    id: 3,
    message: "Bye"
  }
]

const DialogItem = (props: DialogItemProps) => {
  return (
    <li>
      <NavLink to={`/dialogs/${props.id}`}>{props.title}</NavLink>
    </li>
  );
};

type MessagePropsType = {
  text: string;
};

const Message = (props: MessagePropsType) => {
  return <div className="message">{props.text}</div>;
};

export function Dialogs() {
  return (
    <DialogsContent>
      <DialogsTitles>
        {dialogsFriendsData.map((data) => <DialogItem id={data.id} title={data.name} />)}
      </DialogsTitles>

      <div className="messages">
        {dialogsMessageData.map((data) => <Message text={data.message}/>)}
      </div>
    </DialogsContent>
  );
}

const DialogsContent = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 10fr;

  div {
    display: flex;
    flex-direction: column;
  }
`;
const DialogsTitles = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 30px;

  li {
    &:active {
      color: rgb(4, 149, 159);
    }
  }
`;
