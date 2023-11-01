import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const GoBackBtn = () => {

    const navigate = useNavigate()

  return (
    <div className='shop-container my-5'>
        <div>
            <button onClick={() => navigate(-1)} className='text-shopBlue text-lg hover:drop-shadow-lg'><BsArrowLeft className='inline-block mr-2' size={20} />Go back</button>
        </div>
    </div>
  )
}

export default GoBackBtn