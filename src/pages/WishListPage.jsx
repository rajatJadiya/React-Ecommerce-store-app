import React from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";
import TitleBar from "../components/TitleBar";
import WishList from "../components/WishList";
import Footer from "../components/Footer";

const WishListPage = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/5 z-[-10]"></div>
      <div className="shop-container mt-5">
        <h3 className="text-4xl font-thin capitalize">My Wish List</h3>
      </div>
      <WishList />
    </div>
  );
};

export default WishListPage;
