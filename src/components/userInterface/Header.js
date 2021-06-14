import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import '../uiCustomCss/Header.css';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../authentication/authContext';


function Header() {
  const [{user}] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <input className="header__searchInput" placeholder={`Search ${user ? user.displayName : "Anonymous"}`} />
        <SearchIcon className="header__seachIcon" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon className="header__right_help_icon" />
        <Avatar className="header__avatar" alt={user ? user.displayName : ""} src={user ? user.photoURL : ""} />
      </div>

    </div>
  )
}

export default Header
