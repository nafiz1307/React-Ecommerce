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
        <Product
          id={1}
          title="My Book Cover"
          price={19.99}
          image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
          rating={4}
        />
        <Product
          id={2}
          title="The Dreaming Arts"
          price={31.25}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_80004080-e1488217702832.jpg?auto=format&q=60&fit=max&w=930"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id={3}
          title="Game of Thrones"
          price={59.99}
          image="https://www.creativindie.com/wp-content/uploads/2013/10/got_hc1.jpg"
          rating={5}
        />
        <Product
          title="Demo Book"
          price={31.25}
          image="https://i.pinimg.com/originals/bc/2b/b7/bc2bb73aeb3a0617ee2d7a45916c4d20.jpg"
          rating={4}
        />
        <Product
          id={4}
          title="Demo Book 2"
          price={69.69}
          image="https://www.creativeparamita.com/wp-content/uploads/2018/08/hidden-castle.jpg"
          rating={5}
        />
        <Product
          id={5}
          title="The Dark Castle"
          price={31.25}
          image="https://thebookcoverdesigner.com/wp-content/uploads/2020/08/Premade-Fantasy-Castle.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          title="Echoes From the Past"
          price={31.25}
          image="https://thebookcoverdesigner.com/wp-content/uploads/2016/02/Premade-Young-Adult-YA-Fantasy-Dark-Fantasy-Book-Cover-Echoes-From-The-Past.jpg"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
