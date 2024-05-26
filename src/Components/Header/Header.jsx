import React from "react";
import { BiSolidCategory, BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiBarbedSun } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import userAvatar1 from "../../Assets/img/avatar-1.jpg";
import { ModeAction } from "../../Redux-Store/actions/modeActions";
import { useSelector } from "react-redux";

function Header() {
  
  const {selectedMode} = useSelector((store) => store.mode);
  const {setMode} = ModeAction(); 

  return (
    <header className="header">
      <div className="header-block-1">
        <div className="category">
          <BiSolidCategory />
        </div>
        <div className="notification">
          <IoIosNotifications />
        </div>
        <div className="location-block">
          <h3>
            <span>
              <FaMapLocationDot />
            </span>{" "}
            Seattle, Australia{" "}
          </h3>
        </div>
      </div>
      <div className="header-block-2">
        <div className="search-bar">
          <span>
            <BiSearch />
          </span>
          <input type="text" placeholder="Search any Place or City" />
        </div>
      </div>
      <div className="header-block-3">
        <div className="mode-block">
          <div
            className={`sun-div ${selectedMode == "sun" ? "active" : ""}`}
            onClick={() => setMode("sun")}
          >
            <GiBarbedSun />
          </div>
          <div
            className={`moon-div ${selectedMode == "moon" ? "active" : ""}`}
            onClick={() => setMode("moon")}
          >
            <BsFillMoonStarsFill />
          </div>
          <div
            className={`color-slider ${
              selectedMode === "sun" ? "sunSlide" : "moonSlide"
            }`}
          ></div>
        </div>
        <div className="user-block">
          <img src={userAvatar1} alt="user-avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
