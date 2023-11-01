import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import TitleBar from '../components/TitleBar'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { BASE_URL, ENDPOINTS } from '../api/Endpoints'
import ProductCard from '../components/ProductCard'
import BallTriangle from 'react-loading-icons/dist/esm/components/ball-triangle'
import Footer from '../components/Footer'

const ProductCategoryPage = () => {

    const {categoryName} = useParams()
    console.log(categoryName)

    const {data:categoryProducts, loading, error} = useFetch(BASE_URL + ENDPOINTS.PRODUCTS_BY_CATEGORY + categoryName)

    const [filteredValue, setFilteredValue] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedProducts = filteredValue === "all" ? categoryProducts : [...(categoryProducts ?? [])]?.sort((a, b) =>{
        if(filteredValue === "highest_rated"){
            return b.rating.rate - a.rating.rate
        }
        else if(filteredValue === "lowest to highest"){
            return a.price - b.price
        }
        else if (filteredValue === "highest to lowest"){
            return b.price - a.price
        }
        else if(filteredValue === "lowest_rated"){
            return a.rating.rate - b.rating.rate
        }
    })

    const searchedProducts = categoryProducts?.filter((prd) =>{
        return prd.title.toLowerCase().includes(searchQuery) 
    })

  return (
    <div>
        <TitleBar title={categoryName} setFilteredValue={setFilteredValue} setSearchQuery={setSearchQuery} />
        <div className='shop-container mt-5 mb-12 '>
            {loading ? (
                <div className='h-[100vh]'>
                    <div className='flex flex-col items-center mt-16'>
                    <BallTriangle stroke='#57bfdc' speed={1} fontFamily='150' />
                    <p className='text-2xl font-semibold text-[#57bfdc]'>Loading, please wait...</p>
                </div>
                </div>
            ) : searchQuery === "" ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5'>
                {sortedProducts?.map((prd) =>(
                    <ProductCard  key={prd.id} product={prd} />    
                ))}
            </div>
            ) : searchedProducts.length ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5'>
                { searchedProducts?.map((prd) =>(
                    <ProductCard  key={prd.id} product={prd} />    
                ))}
            </div>
            ) : (
                <div className='text-center text-3xl h-[80vh]'>
                    <p>No results found for "{searchQuery}"</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProductCategoryPage