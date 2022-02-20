import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchIn" placeholder="Search" />
        <i className="material-icons header_search_icon">search</i>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionL1">Hello User</span>
          <span className="header_optionL2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionL1">Returns</span>
          <span className="header_optionL2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionL1">Your</span>
          <span className="header_optionL2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_option_baseket">
            <i className="material-icons ">shopping_basket</i>
            <span className="header_optionL2 basket_count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
