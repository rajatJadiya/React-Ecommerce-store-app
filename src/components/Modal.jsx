import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ImCross} from 'react-icons/im'
import { CHANGE_MODAL, REMOVE_FROM_CART } from '../redux/slice/cartSlice'

const Modal = () => {

    const modalOpen = useSelector((state) => state.Cart.modalOpen)
    const productInModal = useSelector((state) => state.Cart.productInModal)
    const dispatch = useDispatch()

    const handleRemoveFromCart = () =>{
        dispatch(REMOVE_FROM_CART(productInModal))
        dispatch(CHANGE_MODAL())
    }

    if(!modalOpen) return 

  return (
    <div id='overlay' onClick={() => dispatch(CHANGE_MODAL())} className='fixed inset-0 w-[100%] h-[100%] bg-black/50 z-[1000]'>

        {/* modal container  */}
        <div id='modalContainer' onClick={(e) => e.stopPropagation()} className='bg-white max-w-[700px] w-[100%] min-h-[200px] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg p-8 shadow-xl shadow-black/50'>      
                <ImCross onClick={() => dispatch(CHANGE_MODAL())} role='button' className='absolute top-3 right-3 cursor-pointer' />
                
                {/* modal content   */}
                <div className='mt-5'>
                    <p className='font-josefinSans text-xl md:text-2xl text-center'>Do you want to remove <span className='italic font-thin font-poppins'>{productInModal.title}</span> from the Cart?</p>

                    {/* buttons  */}
                    <div className='mt-8 text-center space-y-3 space-x-3'>
                        <button onClick={handleRemoveFromCart} className='bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600'><span className='font-bold'>Yes,</span> Delete this product</button>
                        <button onClick={() => dispatch(CHANGE_MODAL())} className='bg-shopDarkBlue hover:bg-[#0a2869] text-white px-4 py-2 rounded-md'>Cancel</button>
                    </div>

                </div>

        </div>
    </div>
  )
}

export default Modal