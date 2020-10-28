import React from 'react';
import { Message } from '../../models/Message';
import { User } from '../../models/User';
import { MessageBar } from './MessageBar';
import './MessageBox.scss';
import { MessageList } from './MessageList';

interface IMessageBoxProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  currentUser: User;
}

export const MessageBox: React.FunctionComponent<IMessageBoxProps> = (props: IMessageBoxProps) => {
  return (
    <div className="message-box">
      <MessageList
        messages={props.messages}
        currentUser={props.currentUser}
      />
      <MessageBar
        onSendMessage={props.onSendMessage}
      />
    </div>
  );
}