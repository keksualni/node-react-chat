import React, { useState, useEffect } from 'react';
import { Message } from '../models/Message';
import { ChatList } from './ChatList/ChatList';
import { MessageBox } from './MessageBox/MessageBox';
import './ChatContainer.scss';
import { Chat } from '../models/Chat';
import { User } from '../models/User';
import { SearchBar } from './ChatList/SearchBar';

const MOCKED_CHAT_DATA: Chat[] = [
  {
    id: 1,
    members: [],
    name: 'get.heavy',
    messages: [
      {
        id: 1,
        text: "Trap Hata",
        resolver: {
          id: 1,
          nickname: 'get.heavy'
        },
        sender: {
          id: 2,
          nickname: 'keksualni'
        },
      }
    ]
  },
  {
    id: 2,
    members: [],
    name: 'keksualni',
    messages: [
      {
        id: 1,
        text: 'Trap Hata 2',
        resolver: {
          id: 1,
          nickname: 'get.heavy'
        },
        sender: {
          id: 2,
          nickname: 'keksualni'
        },
      }
    ]
  },
];

const MOCKED_USERS_DATA: User[] = [
  {
    id: 1,
    nickname: 'kolya1'
  },
  {
    id: 2,
    nickname: 'sasha1'
  }
];

const MOCKED_CURRENT_USER_DATA: User = {
  id: 2,
  nickname: 'keksualni'
};

export const ChatContainer: React.FunctionComponent<any> = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat>();
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    setChats(MOCKED_CHAT_DATA);
    setUsers(MOCKED_USERS_DATA);
    setCurrentUser(MOCKED_CURRENT_USER_DATA);
  }, []);

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
      <div className="right-bar">
        {currentUser && <MessageBox
          messages={currentChat ? currentChat.messages : []}
          onSendMessage={() => {}}
          currentUser={currentUser}
        />}
      </div>
    </div>
  );

  function _getLastChatMessage(chatId: number): Message {
    const chat: Chat = chats.filter((chat: Chat) => chat.id == chatId)[0];
    const lastMessage: Message = chat.messages[chat.messages.length - 1];

    return lastMessage;
  }

  function _onChatClick(chat: Chat): void {
    setCurrentChat(chat);
  }
}