import React from "react";
import styled from "styled-components";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { DialogsPageType } from "../../redux/state";

export function Dialogs(props: DialogsPageType) {
  return (
    <DialogsContent>
      <DialogsTitles>
        {props.dialogs.map((data) => <DialogItem id={data.id} title={data.name} />)}
      </DialogsTitles>

      <div className="messages">
        {props.messages.map((data) => <Message text={data.message}/>)}
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
