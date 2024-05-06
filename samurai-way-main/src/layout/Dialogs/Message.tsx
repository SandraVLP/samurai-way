type MessagePropsType = {
    text: string;
  };

export const Message = (props: MessagePropsType) => {
    return <div className="message">{props.text}</div>;
  };