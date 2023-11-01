import React from 'react'
import {FaFacebookSquare,FaTwitterSquare,FaRedditSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'

const Footer = () => {
  return (
    <div className='bg-[#020c1b] w-full'>
        <div className='shop-container py-[1%]'>
            {/* Logo and tagline  */}
            <div className='text-center'>
                <h2 className='text-white uppercase text-3xl'>Shop<span className='text-shopBlue'>Lane</span></h2>
                <p className='mt-3 text-center text-white px-3 max-w-[800px] mx-auto'>Discover the latest trends in clothing, fashion accessories, electronics, and jewelry, all at one-stop-shop. Elevate your style and shopping experience with us today!</p>
            </div>
            
            {/* icons  */}
            <div className='flex justify-center items-center gap-5 mt-7'>
                <div className='icons'><FaFacebookSquare size={20} color='#fff' /></div>
                <div className='icons'><FaTwitterSquare size={20} color='#fff' /></div>
                <div className='icons'><AiFillInstagram size={20} color='#fff' /></div>
                <div className='icons'><ImLinkedin size={20} color='#fff' /></div>
                <div className='icons'><FaRedditSquare size={20} color='#fff' /></div>
            </div>

            <div className='grid lg:grid-cols-12 mt-6 gap-5'>
                <div className='lg:col-span-7'>
                    <h3 className='text-gray-400 text-center lg:text-left px-4'>Stay up-to-date with the latest fashion, electronics, and jewelry trends, and be the first to know about exclusive deals and promotions by subscribing to our newsletter. Join our community today and elevate your shopping experience!</h3>
                </div>
                <div className='lg:col-span-5 text-center lg:text-right space-y-3'>
                    <p className='text-lg text-shopDarkBlue font-poppins uppercase'>Subscribe to Our Newsletter</p>
                    <input type="text" className='px-4 py-2 rounded-tl-full rounded-bl-full outline-none border-none w-[150px] sm:w-auto' placeholder='Enter your email...' />
                    <button className='px-4 py-2 bg-shopDarkBlue text-white rounded-tr-full rounded-br-full'>Subscribe</button>
                </div>
            </div>
            <hr className='mt-3' />
            <div className='flex justify-between'>
                <p className='text-slate-50'>&#169;All Rights Reserved.</p>
                <p className='text-slate-50 hidden md:block'>The products on this website should not be resold.</p>
            </div>

        </div>
    </div>  
  )
}

export default Footer