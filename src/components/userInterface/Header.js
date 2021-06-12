import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import '../uiCustomCss/Header.css';
import { Avatar } from '@material-ui/core';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <input className="header__searchInput" placeholder="Search __LoginUser__ " />
        <SearchIcon className="header__seachIcon" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon className="header__right_help_icon" />
        <Avatar className="header__avatar" alt="UserName Here" src="" />
      </div>

    </div>
  )
}

export default Header
