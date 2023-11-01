import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from '../redux/slice/cartSlice'
import { toast } from 'react-hot-toast'

const WishItem = ({WishItem}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.Cart.cart)
    const isItemInCart = cart.find((item) => item.id === WishItem.id)

    const handlePrice = (ind) =>{
        const price = WishItem?.price + ''
        const priceArr = price.split(".")
        return priceArr[ind]
    }

    const handleAddToCart = () =>{
        if(!isItemInCart){
            dispatch(ADD_TO_CART(WishItem))
            toast.success(`${WishItem.title} has been successfully added to the Cart!`)
        }
    }

    const handleRemoveFromCart = () =>{
        if(isItemInCart){
            dispatch(REMOVE_FROM_CART(WishItem))
            toast.success(`${WishItem.title} has been successfully removed from the Cart!`)
        }
    }

  return (
    <div className='flex p-4 md:flex-row flex-col gap-5 md:gap-0'>
        {/* image  */}
        <div className='basis-[25%]'>
            <img className='w-[100px] mx-auto' src={WishItem?.image} alt={WishItem?.title} />
        </div>

        {/* name and description */}
        <div className='basis-[60%]'>
            <h3 className='text-xl font-thin font-poppins'>{WishItem?.title}</h3>
            <p className='text-sm text-gray-500'>{WishItem?.description}</p>
            <p className='text-2xl font-bold font-robotoMono mt-3'><span className='text-sm font-thin text-gray-600'>$</span>{handlePrice(0)}<sup className='text-sm text-gray-600 font-thin'>{handlePrice(1)}</sup></p>

            {/* cart buttons  */}
            <div className='md:space-x-2 space-y-3 md:space-y-0'>
            <button onClick={handleAddToCart} className='bg-shopBlue text-white px-4 py-1  rounded mr-3 md:mr-0'>{isItemInCart ? 'Added to Cart' : 'Add to Cart'}</button>
            <button disabled={!isItemInCart} onClick={handleRemoveFromCart} className={`text-white px-4 py-1 rounded mr-3 md:mr-0 ${isItemInCart ? 'bg-black' : 'bg-black/50'}`}>Remove from Cart</button>
            <button onClick={() => dispatch(REMOVE_FROM_WISHLIST(WishItem))} className='bg-red-500 text-white px-4 py-1 rounded md:hidden'>Remove</button>
            </div>
        </div>
        
        {/* buttons  */}
        <div className='basis-[15%] px-4 space-y-3 items-center justify-center hidden md:flex'>
            <button onClick={() => dispatch(REMOVE_FROM_WISHLIST(WishItem))} className='bg-red-500 text-white px-4 py-1 rounded'>Remove</button>
        </div>
    </div>
  )
}

export default WishItem