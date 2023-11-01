import React from 'react'
import useFetch from '../hooks/useFetch'
import { BASE_URL, ENDPOINTS } from '../api/Endpoints'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
    const {data: prdCategory, loading, error} = useFetch(BASE_URL + ENDPOINTS.CATEGORIES)
    // console.log(prdCategory)
  return (
    <div className='shop-container mt-8 mb-12'>
       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
       {prdCategory?.map((category) => (
            <CategoriesCard key={category} category={category} />
            ))}
       </div>
    </div>
  )
}

export default Categories