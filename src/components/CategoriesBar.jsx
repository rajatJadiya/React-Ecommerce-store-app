import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoriesBar = () => {
  return (
    <div className='shop-container'>
        <div className='border-t-2 border-b-2'>
            <ul className='flex items-center justify-center flex-col sm:flex-row gap-[1.5rem] md:gap-[2rem] lg:gap-[6rem] text-lg py-4'>
                <li><NavLink to={"/products"}>All</NavLink></li>
                <li><NavLink to={"/products/category/electronics"}>Electronics</NavLink></li>
                <li><NavLink to={"/products/category/jewelery"}>Jewelery</NavLink></li>
                <li><NavLink to={"/products/category/men's clothing"}>Men's Clothing</NavLink></li>
                <li><NavLink to={"/products/category/women's clothing"}>Women's Clothing</NavLink></li>
            </ul>
        </div>
    </div> 
  )
}

export default CategoriesBar