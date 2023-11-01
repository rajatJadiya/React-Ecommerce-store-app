import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillHeartFill,BsFillCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../redux/slice/cartSlice";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const wishList = useSelector((state) => state.Cart.wishList);
  const cart = useSelector((state) => state.Cart.cart);
  const dispatch = useDispatch();

  const ProductPrice = (index) => {
    const price = product.price + "";
    return price.split(".")[index];
  };

  const productDetails = () => {
    navigate("/products/" + product?.id);
    window.scrollTo(0, 0);
  };

  const handleWishList = () => {
    const item = wishList.find((item) => item.id === product.id);
    if (item) {
      toast.success(
        `${product.title} has been successfully removed from the Wish List`
      );
      dispatch(REMOVE_FROM_WISHLIST(product));
    } else {
      toast.success(
        `${product.title} has been successfully added to the Wish List`
      );
      dispatch(ADD_TO_WISHLIST(product));
    }
  };

  const handleAddToCart = () => {
    if (!isItemInCart) {
      dispatch(ADD_TO_CART(product));
      toast.success(`${product?.title} has been added to your cart!`)
    }
  };

  const wishListItem = wishList.find((item) => item.id === product.id);
  const isItemInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="max-w-[350px] min-h-[400px] border-2 rounded-lg relative">
      {/* product card image  */}
      <div className="p-4" role="button" onClick={productDetails}>
        <img
          className="max-w-[200px] h-[250px] mx-auto hover:scale-110 duration-300"
          src={product.image}
          alt=""
        />
      </div>

      {/* card content  */}
      <div className="px-4 pb-4 space-y-2">
        {/* product name  */}
        <p role="button" onClick={productDetails} className="truncate">
          <span className="font-bold text-lg">Brand,</span>{" "}
          <span className="font-thin text-lg">{product.title}</span>
        </p>

        {/* product rating and rating count       */}
        <div className="flex items-center gap-2">
          <Rating
            SVGstyle={{ display: "inline" }}
            allowFraction
            size={18}
            readonly={true}
            initialValue={product.rating.rate}
          />
          <p className="font-thin">({product.rating.count})</p>
        </div>

        {/* product price  */}
        <div className="space-x-1" role="button" onClick={productDetails}>
          <span className="font-thin text-slate-600">$</span>
          <span className="text-2xl font-semibold font-poppins">
            {ProductPrice(0)}
          </span>
          <sup className="font-thin text-slate-600">{ProductPrice(1)}</sup>
        </div>

        {/* add to cart button  */}
        <div>
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 text-white rounded-md active:scale-95 ${isItemInCart ? 'bg-[#0a296d]' : 'bg-shopDarkBlue'}`}
          >
            {isItemInCart ? <BsFillCartCheckFill className="inline mr-2" /> : <HiShoppingCart className="inline mr-2" />}
            {isItemInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* heart favourite icon  */}
      <div
        onClick={handleWishList}
        className="absolute top-3 right-3 cursor-pointer"
        role="button"
      >
        <BsFillHeartFill
          className={`${wishListItem ? "text-red-500" : "#464649"}`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
