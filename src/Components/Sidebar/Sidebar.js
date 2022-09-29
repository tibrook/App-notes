import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoEdit from "./ImgsSidebar/edit.svg";
import FolderIcon from "./ImgsSidebar/folder.svg";
import Tools from "./ImgsSidebar/settings.svg";
import Menu from "./ImgsSidebar/menu.svg";
import SideNotes from "../SideNotes/SideNotes";
import "./Sidebar.css";
const Sidebar = () => {
  /* To display menu when width < 900px */
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  const checkWidthFunc = () => {
    setCheckWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidthFunc);

    return () => {
      window.removeEventListener("resize", checkWidthFunc);
    };
  });

  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      {checkWidth < 900 && (
        <button className="toggle-nav-btn" onClick={toggleNavFunc}>
          <img src={Menu} alt="" />
        </button>
      )}
      <nav
        className={
          toggleNav ? "container-sidebar visible-nav" : "container-sidebar "
        }
      >
        <div className="sidebar">
          <div className="three-dots">
            <div className="dot-nav d-red"></div>
            <div className="dot-nav d-yellow"></div>

            <div className="dot-nav d-green"></div>
          </div>
          <ul>
            <Link to="/">
              <li>
                <img src={FolderIcon} alt="folder" />
              </li>
            </Link>
            <Link to="/edit">
              <li>
                <img src={LogoEdit} alt="edit" />
              </li>
            </Link>
            <li>
              <img src={Tools} alt="tools" />
            </li>{" "}
          </ul>
        </div>
        <SideNotes />
      </nav>
    </>
  );
};

export default Sidebar;
