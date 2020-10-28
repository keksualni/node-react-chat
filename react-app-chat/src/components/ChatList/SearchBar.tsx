import React from 'react';
import './SearchBar.scss';
import SearchIcon from '../../icons/search.svg';
import { Chat } from '../../models/Chat';
import { User } from '../../models/User';

interface ISearchBarProps {
  users: User[];
  chats: Chat[];
}

export const SearchBar: React.FunctionComponent<ISearchBarProps> = () => {
  return (
    <div className="searchBar">
      <input type="text" className="input" placeholder="Search"/>
      <img src={SearchIcon} alt="search" className="searchIcon"/>
    </div>
  );
}
