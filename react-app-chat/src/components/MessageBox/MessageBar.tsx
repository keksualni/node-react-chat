import React, { useState } from 'react';
import SendIcon from '../../icons/send.svg';
import './MessageBar.scss';

interface IMessageBarProps {
  onSendMessage: (message: string) => void;
}

export const MessageBar: React.FunctionComponent<IMessageBarProps> = (props: IMessageBarProps) => {
  const [message, setMessage] = useState<string>('');

  return (
    <div className="message-bar">
      <input
        className="message-input"
        type="text"
        onChange={ev => setMessage(ev.target.value)}
        placeholder="Write a message..."
      />
      <img className="send-icon" src={SendIcon} onClick={() => props.onSendMessage(message)}/>
    </div>
  );
}