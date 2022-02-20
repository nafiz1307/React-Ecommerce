import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="logo" />
      <div className="header_search">
        <input type="text" className="header_searchIn" placeholder="Search" />
        <i class="material-icons header_search_icon">search</i>
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

        <div className="header_option_baseket">
          <i class="material-icons ">shopping_basket</i>
          <span className="header_optionL2 basket_count">0</span>
        </div>
      </div>
    </div>
  );
};
