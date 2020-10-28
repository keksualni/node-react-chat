import React from 'react';
import { Message } from '../../models/Message';
import { User } from '../../models/User';
import { MessageItem } from './MessageItem';
import './MessageList.scss';

interface IMessageListProps {
  messages: Message[];
  currentUser: User;
}

export const MessageList: React.FunctionComponent<IMessageListProps> = (props: IMessageListProps) => {
  return (
    <div className="message-list">
      {
        props.messages.length > 0
          ? props.messages.map((message: Message) =>
            <MessageItem
              key={message.id}
              message={message}
              currentUser={props.currentUser}
            />
          )
          : <div className="no-messages">No messages here</div>
      }
    </div>
  );
}