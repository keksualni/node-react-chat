import React, { useState, useEffect } from 'react';
import { Message } from '../models/Message';
import { ChatList } from './ChatList/ChatList';
import { MessageList } from './MessageList/MessageList';
import './ChatContainer.css';
import { Chat } from '../models/Chat';
import { User } from '../models/User';
import { SearchBar } from './ChatList/SearchBar';

const MOCKED_CHAT_DATA: Chat[] = [
  {
    id: 1,
    members: [],
    name: 'Lev Krasovksy',
    messages: [
      {
        id: 1,
        text: "Trap Hata",
        resolver: {
          id: 1,
          firstName: "Nikita",
          secondName: "Ivanov",
        },
        sender: {
          id: 2,
          firstName: "Lev",
          secondName: "Krasovsky"
        },
      }
    ]
  },
  {
    id: 2,
    members: [],
    name: 'Nikita Ivanov',
    messages: [
      {
        id: 1,
        text: "Trap Hata 2",
        resolver: {
          id: 1,
          firstName: "Lev",
          secondName: "Ivanov",
        },
        sender: {
          id: 2,
          firstName: "Nikita",
          secondName: "Ivanov"
        },
      }
    ]
  },
];

const MOCKED_USERS_DATA: User[] = [
  {
    id: 1,
    firstName: 'Kolya',
    secondName: 'Kolyanchik',
  },
  {
    id: 2,
    firstName: 'Sasha',
    secondName: 'Malina',
  }
];

export const ChatContainer: React.FunctionComponent<any> = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);

  useEffect(() => {
    setChats(MOCKED_CHAT_DATA);
    setUsers(MOCKED_USERS_DATA);
  });

  const _getLastChatMessage = (chatId: number): Message => {
    const chat: Chat = chats.filter((chat: Chat) => chat.id == chatId)[0];
    const lastMessage: Message = chat.messages[chat.messages.length - 1];

    return lastMessage;
  }

  const _onChatClick = (chat: Chat): void => {
    setCurrentChat(chat);
  }

  return (
    <div className="chat-container">
      <div className="left-bar">
        <SearchBar
          users={users}
          chats={chats}
        />
        <ChatList
          onChatClick={_onChatClick}
          getLastChatMessage={_getLastChatMessage}
          chats={chats}
        />
      </div>
      <MessageList/>
    </div>
  );
}