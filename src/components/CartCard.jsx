import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT_IN_MODAL, CHANGE_MODAL, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const CartCard = ({ cartItem }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getProductDetails = () => {
        navigate(`/products/${cartItem.id}`)
        window.scrollTo(0,0)
    }

    const handleModal = () =>{
      dispatch(CHANGE_MODAL())
      dispatch(ADD_PRODUCT_IN_MODAL(cartItem))
    }

  return (
    <div className="flex mb-10 gap-4 flex-col md:flex-row border-b pb-4">
      {/* image of cart product  */}
      <div className="basis-[25%]">
        <figure>
          <img
            onClick={getProductDetails}
            className="max-w-[150px] m-auto cursor-pointer"
            src={cartItem.image}
            alt={cartItem.title}
          />
        </figure>
      </div>

      {/* product title and description & buttons  */}
      <div className="basis-[60%]">
        {/* title  */}
        <div className="space-y-2">
          <h6 className="text-sm font-bold text-gray-500 uppercase">
            {cartItem.category}
          </h6>
          <h5 onClick={getProductDetails} className="text-3xl font-thin cursor-pointer">{cartItem.title}</h5>
        </div>

        {/* description  */}
        <div className="space-y-1">
          <p className="line-clamp-2 text-sm text-gray-500">
            {cartItem.description}
          </p>
          <p className="font-josefinSans">Product price: $ {cartItem?.price}</p>
        </div>

        {/* buttons  */}
        <div className="space-x-3 mt-6">
          <button onClick={() => dispatch(DECREASE_QUANTITY(cartItem))} className="bg-gray-100 w-[35px] h-[35px] rounded-lg">
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => dispatch(INCREASE_QUANTITY(cartItem))} className="bg-gray-100  w-[35px] h-[35px] rounded-lg">
            +
          </button>
          <button onClick={handleModal} className="bg-red-500 active:bg-red-700 w-[35px] h-[35px] rounded-lg text-white">
            <BsTrash3Fill className="inline" />
          </button>
        </div>
      </div>

        {/* prices  */}
      <div className="self-center basis-[15%]">
        <p className="text-2xl font-bold font-robotoMono">${(cartItem.quantity * cartItem.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartCard;
