import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

function Header() {
  return (
    <header className='header'>
        <div className="category">
        <BiSolidCategory />
        </div>
        <div className="notification">
        <IoIosNotifications />
        </div>
        <div className="location-block">
        <h3><span><FaMapLocationDot /></span> Seattle, Australia </h3>
        </div>
        <div className="search-bar"></div>
        <div className="mode-block"></div>
        <div className="user-block"></div>
    </header>
  )
}

export default Header