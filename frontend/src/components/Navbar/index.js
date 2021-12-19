import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.css";
import {
  BsSearch,
  BsFillArrowUpCircleFill,
  BsBookHalf,
  BsFillEmojiHeartEyesFill,
  BsVectorPen,
  BsCartFill,
  BsSuitHeartFill,
} from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { GiAncientSword, GiSpaceSuit } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = ({ handleLoginClick, handleSignupClick, handleClose }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const handleLogoutClick = () => {
    localStorage.removeItem("USER_NAME");
    window.location.reload();
  };

  useEffect(() => {
    const username = localStorage.getItem("USER_NAME");
    if (null != username) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }
  });

  const renderCartSwitch = (isLoggedIn) => {
    switch (isLoggedIn) {
      case true:
        return (
          <a className="nav-link " href="#">
            <span className="icon">
              <BsCartFill />
            </span>
            Cart
          </a>
        );
      case false:
        return <></>;
    }
  };

  const renderAccountLogoSwitch = (isLoggedIn) => {
    switch (isLoggedIn) {
      case true:
        return (
          <span className="icon">
            <MdAccountCircle />
          </span>
        );
      case false:
        return <></>;
    }
  };

  const renderLogInAndOutSwitch = (isLoggedIn) => {
    switch (isLoggedIn) {
      case true:
        return (
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item">
              <span className="icon nav-link" onClick={handleLogoutClick}>
                Logout
              </span>
            </a>
          </div>
        );
      case false:
        return (
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item">
              <span className="icon nav-link" onClick={handleLoginClick}>
                Login
              </span>
            </a>
            <a className="dropdown-item">
              <span className="icon nav-link" onClick={handleSignupClick}>
                Sign Up
              </span>
            </a>
          </div>
        );
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light text ">
      <a className="navbar-brand" href="/">
        Read Cheap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <Link
            className="nav-item active"
            activeclassName="active"
            to="Search"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <a className="nav-link" onClick={handleClose}>
              <span className="icon">
                <BsSearch />
              </span>
              Search <span className="sr-only">(current)</span>
            </a>
          </Link>

          <Link
            className="nav-item"
            activeclassName="active"
            to="Popular"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link" onClick={handleClose}>
              <span className="icon">
                <BsFillArrowUpCircleFill />
              </span>
              Popular
            </a>
          </Link>
          <Link
            className="nav-item"
            activeclassName="active"
            to="Fiction"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link " onClick={handleClose}>
              <span className="icon">
                <BsBookHalf />
              </span>
              Fiction
            </a>
          </Link>
          <Link
            className="nav-item"
            activeclassName="active"
            to="Fantasy"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link " onClick={handleClose}>
              <span className="icon">
                <GiAncientSword />
              </span>
              Fantasy
            </a>
          </Link>
          <Link
            className="nav-item"
            activeclassName="active"
            to="Manga"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link " onClick={handleClose}>
              <span className="icon">
                <BsVectorPen />
              </span>
              Manga
            </a>
          </Link>
          <Link
            className="nav-item"
            activeclassName="active"
            to="SciFi"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link " onClick={handleClose}>
              <span className="icon">
                <GiSpaceSuit />
              </span>
              Sci-Fi
            </a>
          </Link>
          <Link
            className="nav-item"
            activeclassName="active"
            to="Romance"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link " onClick={handleClose}>
              <span className="icon">
                <BsSuitHeartFill />
              </span>
              Romance
            </a>
          </Link>
          <Link
            className="nav-item"
            activeclassName="active"
            to="Poetry"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a className="nav-link " onClick={handleClose}>
              <span className="icon">
                <BsFillEmojiHeartEyesFill />
              </span>
              Poetry
            </a>
          </Link>

          <Link
            className="nav-item"
            activeclassName="active"
            to="Cart"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            {renderCartSwitch(userIsLoggedIn)}
          </Link>

          <li className="nav-item dropdown">
            {
              renderAccountLogoSwitch(userIsLoggedIn)
            }
            {/*}
            <span className="icon">
              <MdAccountCircle />
            </span>
  */}
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </a>
            {renderLogInAndOutSwitch(userIsLoggedIn)}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
