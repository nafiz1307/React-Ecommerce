import React from "react";
import "./Home.css";
import HomeBanner from "../assets/home_banner.png";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={HomeBanner} alt="home-background" />
      </div>
      <div className="home_row">
        <Product />
        <Product />
      </div>
      <div className="home_row">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home_row">
        <Product />
      </div>
    </div>
  );
};

export default Home;
