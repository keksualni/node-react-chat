import React from 'react';
import { Chat } from '../../models/Chat';
import { Message } from '../../models/Message';
import './ChatItem.css';

interface IChatItemProps {
  item: Chat;
  lastMessage: Message;
}

export const ChatItem: React.FunctionComponent<IChatItemProps> = (props: IChatItemProps) => {
  return (
    <div className="chatItem">
      <div className="header">
        <h2>{props.item.name}</h2>
      </div>
      <div className="body">
        <h3>{props.lastMessage.sender.firstName} {props.lastMessage.sender.secondName}</h3>: {props.lastMessage.text}
      </div>
    </div>
  );
}