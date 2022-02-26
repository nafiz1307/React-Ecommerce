import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "../firebase";

function Header (){
  const [{basket,user},dispatch] = useStateValue();
  const handleAuthentication = ()=>{
    if(user){
      auth.signOut();
    }
  }
  
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
        <div className="header_option" onClick={handleAuthentication}>
          <span className="header_optionL1">`</span>
          <Link to={!user && "/login"}> 
            <span className="header_optionL2">{user? 'Sign Out' : 'Sign In'}</span>
          </Link>
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
            <span className="header_optionL2 basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
