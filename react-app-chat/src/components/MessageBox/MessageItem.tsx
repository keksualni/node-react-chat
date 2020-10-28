import React from 'react';
import { Message } from '../../models/Message';
import { User } from '../../models/User';
import './MessageItem.scss';

interface IMessageItemProps {
  message: Message;
  currentUser: User;
}

export const MessageItem: React.FunctionComponent<IMessageItemProps> = (props: IMessageItemProps) => {
  const messageStyle = props.message.sender.id === props.currentUser.id
    ? 'current-user'
    : 'other-user';

  return (
    <div className={`message-item ${messageStyle}`}>
      {props.message.text}
    </div>
  );
}