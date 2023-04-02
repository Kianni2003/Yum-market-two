import "../App.css";
import Categories from "./Categories";
import Feature from "./Feature";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="welcome-container">
          <div className="hero-image">
            <img src="https://bit.ly/40oamwt" alt="" className="hero" />
          </div>
          <div className="welcome-content">
            <h1 className="font-bold text-4xl">
              😊Welcome to the Yum Market😊
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              reiciendis quidem! Reprehenderit blanditiis ut id, temporibus
              officia sed animi illo assumenda beatae. Nesciunt exercitationem
              excepturi accusantium eos odit consequuntur libero.
            </p>
            <div>
              <button className="rounded-full  w-24 p-2 bg-yellow-400 hover:bg-yellow-500">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <Feature />
        <Categories />
        <ProductCard />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
