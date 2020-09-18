import React from 'react';
import './SearchBar.css';
import SearchIcon from '../../icons/search.svg';

interface ISearchBarProps {
  
}

export const SearchBar: React.FunctionComponent<ISearchBarProps> = () => {
  return (
    <div className="searchBar">
      <input type="text" className="input" placeholder="Type to search"/>
      <img src={SearchIcon} alt="search" className="searchIcon"/>
    </div>
  );
}
