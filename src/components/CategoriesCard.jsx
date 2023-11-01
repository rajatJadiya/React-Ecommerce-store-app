import React, { useState } from 'react'
import electronics from '../assets/electronics.jpg'
import jewelery from '../assets/jewelery.jpg'
import mens_clothing from '../assets/mens-cloth.jpg'
import women_clothing from '../assets/womens-cloth.jpeg'
import { useNavigate } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const CategoriesCard = ({category}) => {
    const [isArrowVisible, setIsArrowVisible] = useState(false)
    const navigate = useNavigate()
    const getCardImage = () => {
        switch(category){
            case 'electronics':
                return electronics
            case 'jewelery':
                return jewelery
            case `men's clothing`:
                return mens_clothing
            case `women's clothing`:
                return women_clothing
        }
        // since we are using switch in a fucntions which returns a value; break and default is not required.
    }

    const handleArrow = () =>{
        setIsArrowVisible(prevState => !prevState)
    }

  return (
    <div className='max-w-[350px] min-h-[400px] rounded shadow-xl shadow-black/20'>
        {/* card image  */}
        <div className='w-full h-[300px]'>
            <img className='w-full h-full object-cover object-top rounded-t' src={getCardImage()} alt="category" />
        </div>

        {/* card content  */}
        <div className='p-4 space-y-5 text-center'>
            <h2 className='text-xl font-poppins capitalize'>{category}</h2>
            <button onClick={() => navigate(`/products/category/${category}`)} onMouseLeave={handleArrow} onMouseEnter={handleArrow} className='bg-shopDarkBlue text-white px-4 py-2 rounded-md'>View Category <BsArrowRight className={`${isArrowVisible ? 'inline' : 'hidden'}`} /></button>
        </div>
    </div>
  )
}

export default CategoriesCard