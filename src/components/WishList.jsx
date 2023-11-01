import React from "react";
import { useSelector } from "react-redux";
import WishItem from "./WishItem";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const wishList = useSelector((state) => state.Cart.wishList);
  const navigate = useNavigate()

  if(!wishList.length){
    return (
      <div className="shop-container h-[80vh] my-8 text-center">
      <h4 className="font-thin text-3xl mb-5">Your Wish List is empty!</h4>
      <button onClick={() => navigate('/products')} className="px-4 py-1 bg-shopDarkBlue rounded-md text-white">Continue Shopping</button>
    </div>
    )
  }

  return (
    <div className="shop-container bg-white h-[70vh] my-8 rounded-md overflow-y-scroll">
      {wishList.map((wishProduct) => (
        <WishItem key={wishProduct.id} WishItem={wishProduct} />
      ))}
    </div>
  );
};

export default WishList;
