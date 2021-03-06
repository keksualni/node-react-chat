import React from 'react';
import { Chat } from '../../models/Chat';
import { Message } from '../../models/Message';
import './ChatItem.scss';

interface IChatItemProps {
  item: Chat;
  lastMessage: Message;
  onChatClick: (chat: Chat) => void;
}

export const ChatItem: React.FunctionComponent<IChatItemProps> = (props: IChatItemProps) => {
  return (
    <div className="chat-item">
      <div className="chat-item-header">
        {props.item.name}
      </div>
      <div className="chat-item-body">
        <div className="body-sender-name">
          {props.lastMessage.sender.nickname}:
        </div>
        {props.lastMessage.text}
      </div>
    </div>
  );
}