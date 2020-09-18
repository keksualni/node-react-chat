import React from 'react';
import { Chat } from '../../models/Chat';
import { Message } from '../../models/Message';
import { ChatItem } from './ChatItem';
import { SearchBar } from './SearchBar';
import './ChatList.css';

interface IChatListProps {
  chats: Chat[];
  getLastChatMessage: (chatId: number) => Message;
}

export const ChatList: React.FunctionComponent<IChatListProps> = (props: IChatListProps) => {
  return (
    <div className="chatList">
      <div className="header">
        Currently online
      </div>
      <SearchBar/>
      {props.chats.map((item: Chat) => {
        const lastChatMessage: Message = props.getLastChatMessage(item.id);

        return <ChatItem
          item={item}
          lastMessage={lastChatMessage}
        />
      })}
    </div>
  );
}