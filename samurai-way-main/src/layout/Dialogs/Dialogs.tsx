import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type DialogItemProps = {
  title: string;
  id: number;
};

const DialogItem = (props: DialogItemProps) => {
  return (
    <li>
      <NavLink to={`/dialogs/${props.id}`}>{props.title}</NavLink>{" "}
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
        <DialogItem id={1} title="Sasha" />
        <DialogItem id={2} title="Ivan" />
        <DialogItem id={3} title="Sveta" />
      </DialogsTitles>

      <div className="messages">
        <Message text="Hi" />
        <Message text="How are you" />
        <Message text="Where are you from?" />
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
