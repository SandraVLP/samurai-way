import { NavLink } from "react-router-dom";

type PropsType = {
    title: string;
    id: number;
  };

export const DialogItem = (props: PropsType) => {
    return (
      <li>
        <NavLink to={`/dialogs/${props.id}`}>{props.title}</NavLink>
      </li>
    );
  };

