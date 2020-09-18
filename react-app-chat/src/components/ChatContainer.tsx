import React, { useState, useEffect } from 'react';
import { Message } from '../models/Message';
import { ChatList } from './ChatList/ChatList';
import { MessageList } from './MessageList/MessageList';
import './ChatContainer.css';

export const ChatContainer: React.FunctionComponent<any> = () => {
  const [chats, setChats] = useState([]);

  const _getLastChatMessage = (chatId: number): Message => {
    
  }

  return (
    <div className="chatContainer">
      <ChatList/>
      <MessageList/>
    </div>
  );
}